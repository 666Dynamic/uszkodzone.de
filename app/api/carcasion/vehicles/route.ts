import { NextRequest, NextResponse } from 'next/server';
const soap = require('soap');

const WSDL_URL = 'https://car.casion.eu/carcasion/ws/wscarcasion.asmx?WSDL';
const USERNAME = 'info@miamiauto.de';
const PASSWORD = 'Bjk3Cw2w';

export async function GET(request: NextRequest) {
  try {
    console.log('🔌 Łączę się z car.casion WSDL...');
    console.log('👤 Username:', USERNAME);
    console.log('🔑 Password długość:', PASSWORD.length, 'znaków');
    
    // Tworzymy klienta SOAP
    const client = await new Promise<any>((resolve, reject) => {
      soap.createClient(WSDL_URL, {
        wsdl_options: {
          timeout: 30000,
        }
      }, (err: any, client: any) => {
        if (err) reject(err);
        else resolve(client);
      });
    });

    console.log('✅ Klient SOAP utworzony');

    // Helper do wywołań SOAP
    const callSoapMethod = (methodName: string, params: any): Promise<any> => {
      return new Promise((resolve, reject) => {
        const method = client[methodName];
        if (!method) {
          reject(new Error(`Metoda ${methodName} nie istnieje`));
          return;
        }
        method(params, (err: any, result: any) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
    };

    // 1. Pobierz listę ID pojazdów z ostatnich 30 dni
    console.log('🚗 Pobieranie listy pojazdów...');
    const fromDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 1);
    
    // Różne warianty struktury XML do testowania
    const xmlVariants = [
      `<Vehicle><username>${USERNAME}</username><password>${PASSWORD}</password></Vehicle>`, // lowercase
      `<Vehicle><Username>${USERNAME}</Username><Password>${PASSWORD}</Password></Vehicle>`, // oryginał
      `<VEHICLE><USERNAME>${USERNAME}</USERNAME><PASSWORD>${PASSWORD}</PASSWORD></VEHICLE>`, // uppercase
      `<DSVEHICLE xmlns="rwb"><Username>${USERNAME}</Username><Password>${PASSWORD}</Password></DSVEHICLE>`, // z namespace
    ];
    
    let vehicleListResult = null;
    let lastError = null;
    
    // Testuj każdy wariant
    for (let i = 0; i < xmlVariants.length; i++) {
      console.log(`🧪 Testowanie wariantu ${i + 1}/${xmlVariants.length}:`, xmlVariants[i].substring(0, 100));
      try {
        vehicleListResult = await callSoapMethod('GetVehicleList', {
          DSVehicleIn: xmlVariants[i],
          From: fromDate.toISOString()
        });
        
        console.log(`✅ Wariant ${i + 1} zwrócił kod:`, vehicleListResult?.GetVehicleListResult);
        
        // Jeśli kod nie jest 9 (błąd logowania), użyj tego wariantu
        if (vehicleListResult?.GetVehicleListResult !== 9) {
          console.log('✅ Znaleziono działający format!');
          break;
        }
      } catch (e: any) {
        console.log(`❌ Wariant ${i + 1} błąd:`, e.message);
        lastError = e;
      }
    }

    console.log('📋 GetVehicleList Result Code:', vehicleListResult?.GetVehicleListResult);
    console.log('📋 GetVehicleList XML:', vehicleListResult?.DSVehicleOut?.substring(0, 500));

    // Test: Sprawdźmy czy GetAvailableManufacturerAndModels działa z tymi credentials
    console.log('🧪 Testuję GetAvailableManufacturerAndModels...');
    let manufacturersResult;
    try {
      manufacturersResult = await callSoapMethod('GetAvailableManufacturerAndModels', {
        username: USERNAME,
        password: PASSWORD
      });
      console.log('✅ GetAvailableManufacturerAndModels zadziałało!');
    } catch (e: any) {
      console.error('❌ GetAvailableManufacturerAndModels błąd:', e.message);
    }

    // 2. Jeśli są pojazdy, pobierz szczegóły
    let vehicles: any[] = [];
    let debugInfo = {
      testedXmlFormats: 4,
      lastResultCode: vehicleListResult?.GetVehicleListResult,
      lastError: vehicleListResult?.DSVehicleOut,
      manufacturersTest: manufacturersResult ? 'Sukces' : 'Błąd',
    };
    
    if (vehicleListResult && vehicleListResult.GetVehicleListResult === 0) {
      const vehicleListXml = vehicleListResult.DSVehicleOut;
      console.log('📄 XML z listą:', vehicleListXml?.substring(0, 500));
      
      // Parsuj XML do pobrania szczegółów pojazdów
      // Na razie zwracamy podstawowe dane
      
      // Opcjonalnie: Pobierz szczegóły pierwszych kilku pojazdów używając GetVehicles
      // To wymaga przekazania ID pojazdów w formacie XML
    }

    return NextResponse.json({
      success: true,
      rawData: vehicleListResult,
      vehicles,
      timestamp: new Date().toISOString(),
      message: 'Dane pobrane pomyślnie'
    });

  } catch (error: any) {
    console.error('❌ Błąd pobierania pojazdów:', error);
    
    return NextResponse.json(
      {
        error: 'Błąd pobierania pojazdów',
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
