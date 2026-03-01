import { CarOffer } from './types'

export const mockCarsItems: CarOffer[] = [
    {
        id: "2602241107976",
        title: "Audi A4",
        company: "Audi",
        modelFull: "A4 2.0 TFSI design",
        ez: "07/2018",
        motor: "Hybrid Benzin/Elektro",
        mileage: 101358,
        rk: 11299,
        wbw: 22500,
        locationZip: "DE 49...",
        powerKw: 185,
        capacityCcm: 1984,
        endDate: "24.02.2026",
        endTime: "14:09",
        status: "active",
        imageUrls: [
            "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=800",
            "https://images.unsplash.com/photo-1620608518884-7a3ac00f28b5?q=80&w=800",
            "https://images.unsplash.com/photo-1549231626-dcaeedc8f615?q=80&w=800",
            "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800",
            "https://images.unsplash.com/photo-1503376713735-a75d710bfb72?q=80&w=800",
            "https://images.unsplash.com/photo-1543465070-42023d8c11aa?q=80&w=800",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800",
        ],
        vin: "XXXXXXXXXXXX83061",
        gearbox: "Automatik",
        nextHu: "11/2027",
        color: "manhattangrau",
        distanceKm: 169,
        partsCost: 3798,
        laborCost: 5019,
        paintCost: 2433,
        equipment: [
            "ABS, Airbags, Alu-Felgen, Klimaautomatik, Automatik-Getriebe, ESP, Wegfahrsperre, Xenon-Licht",
            "Serienausstattung:",
            "Airbag Fahrer-/Beifahrerseite, Anti-Blockier-System (ABS), Antriebs-Schlupfregelung (ASR) mit EDS, Antriebsart: Frontantrieb, Audi Drive Select, Außenspiegel asphärisch, links, Außenspiegel asphärisch, rechts, Außenspiegel Wagenfarbe, Blinkleuchten LED in Außenspiegel integriert, Bremsassistent, Dachkantenspoiler, Dachreling eloxiert, Einstiegsleisten mit Aluminiumeinlage, Elektron. Differentialsperre (EDS), Elektron. Stabilitäts-Programm (ESP), Elektron. Stabilitätskontrolle (ESC), Fahrassistenz-System: City-Notbremsfunktion (Audi pre sense City), Fahrassistenz-System: Müdigkeitserkennung (Pausenempfehlung), Gepäck-/Laderaumabdeckung elektrisch, Gepäckraum-Abtrennung (Netz), Gepäckraumklappe elektr. betätigt (öffnen + schließen), Geschwindigkeits-Begrenzeranlage, Getriebe 7-Gang - Doppelkupplungsgetriebe S-tronic, Glanz-Paket, Innenausstattung: Dekoreinlagen Aluminium, Isofix-Aufnahmen für Kindersitz, Karosserie: 4-türig, Kopf-Airbag-System (Sideguard), Ladekantenschutz (Edelstahl), Licht- und Regensensor, Licht-Paket, Motor 2,0 Ltr. - 185 kW 16V TFSI, Multi-Media-Interface MMI Basic Plus / MMI Radio Plus, Reifen-Reparaturkit, Reifenkontroll-Anzeige, Rücksitzlehne geteilt/klappbar, Schadstoffarm nach Abgasnorm Euro 6, Scheibenwaschdüsen heizbar, Seitenairbag vorn, Servolenkung elektro-mechanisch, Sitze vorn manuell einstellbar, Start/Stop-Anlage, Tagfahrlicht LED, Wegfahrsperre (elektronisch), Wendeladeboden (Ladeboden), Wärmeschutzverglasung grün getönt, Xenon-Scheinwerfer Plus (Abblend- und Fernlicht), Akustikglas Türscheiben vorn, Allwetter-/ Ganzjahresreifen, Anhängerkupplung Vorbereitung, Assistenz-Paket Tour"
        ],
        reportText: `Laufleistung: abgelesen 101358, geschätzt 101358
Fahrzeugbrief vorhanden, Rollfähig
Zustand: gut
Vorschäden: behobener Frontschaden
Nicht rep. Vorschäden: geringe Gebrauchsspuren
Bemerkungen:
Eine Messung der Lackschichtdicke an metallischen Karosserie-Außenteilen wurde mit einem Messgerät durchgeführt.

Schadenfeststellung - Schadenumfang:
Nach Art der vorgefundenen Beschädigungen erhielt das vorbezeichnete Fahrzeug einen seitlichen Anstoß...`,
        calculationText: `Detaillierte Reparaturkostenkalkulation liegt vor. (Dokument auf życzenie użytkownika).`,
        kalkulationDetails: [
            { position: 1, name: "TÜR H L ERNEUERN", price: 812.50, type: "E" },
            { position: 2, name: "SCHEIBE F TÜR H L ERNEUERN", price: 95.00, type: "E" },
            { position: 3, name: "FENSTERHEBER H L ERNEUERN", price: 145.20, type: "E" },
            { position: 4, name: "SEITENWAND L ERNEUERN", price: 1250.00, type: "E" },
            { position: 5, name: "STOSSfÄNGERABDECKUNG H ERNEUERN", price: 650.00, type: "E" },
            { position: 6, name: "RAD H L ERNEUERN", price: 320.00, type: "E" },
            { position: 7, name: "FELGE H R ERNEUERN", price: 280.00, type: "E" },
            { position: 8, name: "STOSSfÄNGERABDECKUNG V ERNEUERN", price: 720.00, type: "E" },
            { position: 9, name: "KOTFLÜGEL V L INSTANDSETZEN", price: 150.00, type: "L" },
            { position: 10, name: "REPARATURLACKIERUNG", price: 2150.00, type: "NL" },
            { position: 11, name: "ACHSVERMESSUNG", price: 180.00, type: "L" },
            { position: 12, name: "KLEINTEILE", price: 45.00, type: "E" }
        ]
    },
    {
        id: "2602231411840",
        title: "Suzuki Swift",
        company: "Suzuki",
        modelFull: "Swift, Club",
        ez: "04/2011",
        motor: "Otto",
        mileage: 191916,
        rk: 3455,
        wbw: 3749,
        locationZip: "DE 97...",
        powerKw: 69,
        capacityCcm: 1242,
        endDate: "24.02.2026",
        endTime: "14:09",
        status: "bid_placed",
        currentBid: 550,
        imageUrls: [
            "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800",
            "https://images.unsplash.com/photo-1542282088-000000000000?q=80&w=800"
        ],
        vin: "XXXXXXXXXXXXXX82811",
        gearbox: "Manuell",
        nextHu: "01/2027",
        color: "schwarz",
        distanceKm: 420,
        partsCost: 1200,
        laborCost: 800,
        paintCost: 1455,
        equipment: ["Klimaanlage", "Radio CD", "Servolenkung"],
        reportText: "Kein Detailbericht verfügbar.",
        calculationText: "Kalkulation liegt vor."
    },
    {
        id: "2602231411841",
        title: "Mercedes-Benz C-Klasse",
        company: "Mercedes-Benz",
        modelFull: "C-Klasse, C 220 (BlueTEC) d T 7G-TRONIC Avantgarde",
        ez: "09/2014",
        motor: "Diesel",
        mileage: 155188,
        rk: 8513,
        wbw: 16000,
        locationZip: "DE 13...",
        powerKw: 125,
        capacityCcm: 2143,
        endDate: "24.02.2026",
        endTime: "14:10",
        status: "active",
        imageUrls: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800"
        ],
        vin: "XXXXXXXXXXXXXX44412",
        gearbox: "Automatik",
        nextHu: "11/2025",
        color: "weiß",
        distanceKm: 150,
        partsCost: 4500,
        laborCost: 2000,
        paintCost: 2013,
        equipment: ["Navigationssystem", "LED Scheinwerfer", "Sitzheizung", "Einparkhilfe"],
        reportText: "Frontschaden, Kühler undicht. Airbags ausgelöst.",
        calculationText: "Reparaturkosten übersteigen möglicherweise den Restwert. Details siehe Kalkulationsdokument."
    }
];
