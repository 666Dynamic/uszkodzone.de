export type CarStatus = 'active' | 'bid_placed';

export interface CarOffer {
    id: string;
    title: string;
    company: string;
    modelFull: string;
    ez: string;
    motor: string;
    mileage: number;
    rk: number;
    wbw: number;
    locationZip: string;
    powerKw: number;
    capacityCcm: number;
    endDate: string;
    endTime: string;
    status: CarStatus;
    currentBid?: number; // kwota zadeklarowana przez użytkownika
    imageUrls: string[]; // zmiana na tablicę zdjęć

    // Details
    vin: string;
    gearbox: string;
    nextHu: string;
    color: string;
    distanceKm: number;
    partsCost: number;
    laborCost: number;
    paintCost: number;
    equipment: string[];
    reportText: string;
    calculationText: string;
    kalkulationDetails?: { position: number; name: string; price: number; type: string }[];
}
