export type ipData = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
};

export type ipDataProp= {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
  };
  isp: string;
}

export type latLng={
  lat?: number,
  lng?:number
}
