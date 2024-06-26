export interface ImplMarker {
  lat: number;
  long: number;
  title: string;
  id: string;
  categoryId: string | null;
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
  long: number;
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
