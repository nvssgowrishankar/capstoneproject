export interface Driver {
    driverId: number;
    username: string;
    password: string;
    licenseNumber: string;
    cabDetails: {
        cabId: number;
        carType: string;
        registrationNumber: string;
      };
    }
    