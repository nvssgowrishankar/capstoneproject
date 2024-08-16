export interface TripBooking {
    tripId: number;
    customerId: number;
    driverId: number;
    sourceLocation: string;
    destinationLocation: string;
    distanceInKm: number;
    status: string;
    fare: number;
    fromDateTime: string;
    toDateTime: string;
  }
  