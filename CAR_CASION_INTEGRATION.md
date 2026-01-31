# Car.casion API Integration Guide

## 📋 Overview

This document describes how to integrate the car.casion API with Uszkodzone.de platform.

## 🔑 API Access

Contact car.casion to obtain:
- API Key
- API Endpoint URL
- Rate limits
- Documentation

## 🏗️ Implementation Structure

### 1. Environment Variables

Add to `.env.local`:
```bash
CAR_CASION_API_KEY=your_api_key_here
CAR_CASION_API_URL=https://api.car.casion/v1
CAR_CASION_WEBHOOK_SECRET=your_webhook_secret
```

### 2. API Client (`lib/car-casion.ts`)

```typescript
const API_URL = process.env.CAR_CASION_API_URL
const API_KEY = process.env.CAR_CASION_API_KEY

export class CarCasionAPI {
  private async request(endpoint: string, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }
    
    return response.json()
  }

  async getCars(filters = {}) {
    return this.request('/cars', {
      method: 'POST',
      body: JSON.stringify(filters),
    })
  }

  async getCar(id: string) {
    return this.request(`/cars/${id}`)
  }

  async placeBid(carId: string, amount: number, userId: string) {
    return this.request('/bids', {
      method: 'POST',
      body: JSON.stringify({ carId, amount, userId }),
    })
  }

  async getBidStatus(bidId: string) {
    return this.request(`/bids/${bidId}`)
  }
}
```

### 3. Data Mapping

Map car.casion response to our Car type:

```typescript
function mapCarCasionToCar(apiCar: any): Car {
  return {
    id: apiCar.id,
    insurer: apiCar.insurance_company,
    insurerNumber: apiCar.insurance_number,
    make: apiCar.manufacturer,
    model: apiCar.model_name,
    fullName: `${apiCar.manufacturer} ${apiCar.model_name}`,
    restwert: formatPrice(apiCar.residual_value),
    repairCost: formatPrice(apiCar.repair_costs.total),
    marketValue: formatPrice(apiCar.market_value),
    firstRegistration: formatDate(apiCar.first_registration),
    fuel: apiCar.fuel_type,
    vin: apiCar.vin,
    transmission: apiCar.transmission_type,
    engineSize: `${apiCar.engine_size} ccm`,
    power: `${apiCar.power_kw} kW`,
    mileage: `${apiCar.mileage.toLocaleString()} KM`,
    color: apiCar.color,
    location: `DE ${apiCar.postal_code.substring(0, 2)}...`,
    timeLeft: calculateTimeLeft(new Date(apiCar.auction_end)),
    images: apiCar.images || [],
  }
}
```

### 4. Server Actions (`app/actions/cars.ts`)

```typescript
'use server'

import { CarCasionAPI } from '@/lib/car-casion'

const api = new CarCasionAPI()

export async function fetchCarsAction(filters = {}) {
  try {
    const data = await api.getCars(filters)
    return { success: true, cars: data.map(mapCarCasionToCar) }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

export async function placeBidAction(carId: string, amount: number) {
  try {
    const result = await api.placeBid(carId, amount, 'user-id-from-session')
    return { success: true, bid: result }
  } catch (error) {
    return { success: false, error: error.message }
  }
}
```

### 5. Webhook Handler (`app/api/webhooks/car-casion/route.ts`)

```typescript
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const signature = request.headers.get('x-car-casion-signature')
  const body = await request.text()
  
  // Verify webhook signature
  if (!verifySignature(body, signature)) {
    return new Response('Invalid signature', { status: 401 })
  }
  
  const event = JSON.parse(body)
  
  switch (event.type) {
    case 'bid.accepted':
      // Handle bid acceptance
      await handleBidAccepted(event.data)
      break
      
    case 'bid.rejected':
      // Handle bid rejection
      await handleBidRejected(event.data)
      break
      
    case 'auction.ended':
      // Handle auction end
      await handleAuctionEnded(event.data)
      break
  }
  
  return new Response('OK', { status: 200 })
}
```

## 🔄 Real-time Updates

### Option 1: Polling (Simple)
```typescript
// Update auction status every 30 seconds
useEffect(() => {
  const interval = setInterval(async () => {
    const data = await fetchCarsAction()
    setCars(data.cars)
  }, 30000)
  
  return () => clearInterval(interval)
}, [])
```

### Option 2: WebSockets (Advanced)
```typescript
// app/api/ws/route.ts
import { Server } from 'socket.io'

export function GET(request: Request) {
  // Setup WebSocket connection
  const io = new Server(3001)
  
  io.on('connection', (socket) => {
    socket.on('subscribe', (carId) => {
      socket.join(`car:${carId}`)
    })
  })
}
```

## 📊 Caching Strategy

```typescript
import { unstable_cache } from 'next/cache'

export const getCachedCars = unstable_cache(
  async () => {
    return await api.getCars()
  },
  ['cars-list'],
  {
    revalidate: 300, // 5 minutes
    tags: ['cars'],
  }
)
```

## 🧪 Testing

### Mock API for Development
```typescript
// lib/__mocks__/car-casion.ts
export class CarCasionAPI {
  async getCars() {
    return mockCars
  }
  
  async placeBid(carId: string, amount: number) {
    return {
      id: 'bid-123',
      status: 'pending',
      carId,
      amount,
    }
  }
}
```

## 📝 Next Steps

1. Contact car.casion for API access
2. Review API documentation
3. Implement authentication
4. Add error handling
5. Setup monitoring (Sentry)
6. Add rate limiting
7. Implement caching
8. Test thoroughly
9. Deploy webhooks endpoint
10. Monitor API usage

## 🔒 Security

- Never expose API keys in client-side code
- Use server actions for all API calls
- Verify webhook signatures
- Implement rate limiting
- Log all API requests
- Handle errors gracefully

## 📞 Support

Questions about integration?
- Email: kontakt@uszkodzone.de
- car.casion Support: [support contact]
