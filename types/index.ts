export interface Car {
  id: string
  insurer: string
  insurerNumber?: string
  make: string
  model: string
  fullName: string
  restwert: string
  repairCost: string
  marketValue: string // WBW - Wiederbeschaffungswert
  
  // Technical details
  firstRegistration: string // Erstzulassung
  buildYear?: string // Baujahr
  fuel: string // Motorart (Benzin, Diesel, Elektro)
  vin: string
  transmission: string // Getriebe
  engineSize: string // Hubraum in ccm
  power: string // Leistung in kW
  nextInspection?: string // Nächste HU
  mileage: string // Laufleistung in KM
  color: string
  location: string // Standort (DE postal code)
  distance?: string // Entfernung from user
  
  // Cost breakdown
  sparepartsCost?: string // Ersatzteil-Kosten
  laborCost?: string // Lohnkosten
  paintCost?: string // Lackkosten
  
  // Auction details
  timeLeft: string
  auctionEndDate?: Date
  
  // Media
  images: string[]
  
  // Additional info
  equipment?: string[] // Ausstattung
  damageReport?: string // Bericht
  calculation?: string // Kalkulation/Ersatzteile
}

export interface AuctionFilters {
  make?: string[]
  model?: string[]
  priceMin?: number
  priceMax?: number
  yearMin?: number
  yearMax?: number
  fuel?: string[]
  transmission?: string[]
  location?: string[]
  mileageMax?: number
}

export interface UserBid {
  id: string
  userId: string
  carId: string
  bidAmount: number
  depositAmount: number
  depositPaid: boolean
  status: 'pending' | 'accepted' | 'rejected' | 'won' | 'lost'
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  address?: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  verified: boolean
  createdAt: Date
}
