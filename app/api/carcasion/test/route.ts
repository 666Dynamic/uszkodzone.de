import { NextRequest, NextResponse } from 'next/server';
const soap = require('soap');

const WSDL_URL = 'https://car.casion.eu/carcasion/ws/wscarcasion.asmx?WSDL';

export async function POST(request: NextRequest) {
  try {
    const { username, password, action } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username i password są wymagane' },
        { status: 400 }
      );
    }

    console.log('🔌 Łączę się z car.casion WSDL:', WSDL_URL);
    
    // Tworzymy klienta SOAP z opcjami (używamy Promise wrapper)
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
    console.log('📋 Dostępne metody:', Object.keys(client).filter(k => typeof client[k] === 'function'));

    // Helper function to promisify SOAP calls
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

    // Testujemy różne metody w zależności od action
    let result;
    
    switch (action) {
      case 'checkConnection':
        // Test połączenia - różne warianty nazw metod
        console.log('🧪 Test metody: CheckConnection/ConnectionCheck');
        try {
          if (typeof client.CheckConnection === 'function') {
            result = await callSoapMethod('CheckConnection', {
              username,
              password
            });
          } else if (typeof client.ConnectionCheck === 'function') {
            result = await callSoapMethod('ConnectionCheck', {
              username,
              password
            });
          } else {
            // Jeśli nie ma metody testowej, użyj GetAvailableVehicleTypes jako test
            result = await callSoapMethod('GetAvailableVehicleTypes', {
              username,
              password
            });
          }
        } catch (e: any) {
          console.error('❌ Błąd CheckConnection:', e.message);
          throw e;
        }
        break;

      case 'getVehicleList':
        // Pobieranie listy pojazdów
        console.log('🚗 Pobieranie listy pojazdów');
        const fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 1); // Ostatni miesiąc
        
        result = await callSoapMethod('GetVehicleList', {
          DSVehicleIn: `<Vehicle><Username>${username}</Username><Password>${password}</Password><From>${fromDate.toISOString()}</From></Vehicle>`
        });
        break;

      case 'getManufacturers':
        // Pobieranie listy producentów i modeli
        console.log('🏭 Pobieranie marek i modeli');
        result = await callSoapMethod('GetAvailableManufacturerAndModels', {
          username,
          password
        });
        break;

      case 'getVehicleTypes':
        // Pobieranie typów pojazdów
        console.log('📦 Pobieranie typów pojazdów');
        result = await callSoapMethod('GetAvailableVehicleTypes', {
          LanguageCode: 'de' // Język: de, en, pl
        });
        break;

      default:
        return NextResponse.json(
          { error: 'Nieznana akcja' },
          { status: 400 }
        );
    }

    console.log('✅ Odpowiedź otrzymana:', JSON.stringify(result).substring(0, 200));

    return NextResponse.json({
      success: true,
      action,
      result: result[0], // soap zwraca tablicę z wynikiem
      raw: result, // dodajemy też surową odpowiedź
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('❌ Błąd API car.casion:', error);
    console.error('Stack:', error.stack);
    
    // Bardziej szczegółowe informacje o błędzie
    let errorDetails = error.message;
    if (error.response) {
      errorDetails += '\n\nOdpowiedź serwera: ' + JSON.stringify(error.response);
    }
    if (error.body) {
      errorDetails += '\n\nBody: ' + error.body;
    }
    
    return NextResponse.json(
      {
        error: 'Błąd połączenia z car.casion API',
        details: errorDetails,
        message: error.message,
        code: error.code,
        root: error.root?.toString(),
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
