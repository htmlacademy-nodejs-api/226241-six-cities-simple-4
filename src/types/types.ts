export interface IOffer {
  title: string;
  description: string;
  postDate: Date;
  city: ICity;
  preview_image: string;
  images: string[];
  is_premium: boolean;
  rating: number;
  type: TOfferTypes;
  bedrooms: number;
  max_adults: number;
  price: number;
  goods: TGoods[];
  host: IUser;
  comments_qty: number;
  location: ILocation;
  id: string;
}

export type TOfferTypes = "apartment" | "house" | "room" | "hotel";

export type TGoods =
  | "Breakfast"
  | "Air conditioning"
  | "Laptop friendly workspace"
  | "Baby seat"
  | "Washer"
  | "Towels"
  | "Fridge";

export interface ICity {
  name: string;
  location: ILocation;
}

export interface ILocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface IUser {
  id: string;
  name: string;
  is_pro: boolean;
  avatar_url: string;
}
