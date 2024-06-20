export interface ImplMarker {
  lat: number;
  long: number;
  title: string;
  id: string;
  categoryId?: string | null
}


export interface ImplCategory {
  name: string,
  color: string,
  id: string
}