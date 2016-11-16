export interface Name {
    name?: string;
}

export interface Location {
    address1?: string;
    address2?: string;
    postcode?: string;
    city?: string;
}

export interface Locations {
    locations?: Location[];
}

export interface Opening {
    opening?: {
        monday: DayTime;
        tuesday: DayTime;
        wednesday: DayTime;
        thursday: DayTime;
        friday: DayTime;
        saturday: DayTime;
        sunday: DayTime;
    };
}

export interface Contact {
    contact?: {
        email: string;
        phone: number;
    };
}

export interface DayTime {
    openHour: string;
    openMin: string;
    closeHour: string;
    closeMin: string;
}
export interface RegistrationForm extends Name, Location, Opening, Contact { }
