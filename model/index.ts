export interface ImplMarker {
  lat: number;
  lng: number;
  title: string;
  id: string;
  companyId: string | null;
}

export interface ImplCategory {
  name: string;
  color: string;
  id: string;
}

export interface ImplCompany {
  id: string;
  name: string;
  shortName: string;
  color: string;
}

export interface ImplBillBoard {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  led: {
    from: string;
    to: string;
    size: {
      mW: number;
      mH: number;
    };
  };
  discount: number;
  cost: number;
  booking?: {
    company: ImplCompany;
    days: number;
  };
}
