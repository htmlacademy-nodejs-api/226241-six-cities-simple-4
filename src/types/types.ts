export interface OfferInterface {
  title: string;
  description: string;
  postDate: Date;
  city: CityInterface;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  type: OfferTypesType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: GoodsType[];
  host: UserInteface;
  commentsQty: number;
  location: LocationInterface;
}

export type OfferTypesType = "apartment" | "house" | "room" | "hotel";

export type GoodsType =
  | "Breakfast"
  | "Air conditioning"
  | "Laptop friendly workspace"
  | "Baby seat"
  | "Washer"
  | "Towels"
  | "Fridge";

export interface CityInterface {
  name: string;
  location: LocationInterface;
}

export interface LocationInterface {
  latitude: number;
  longitude: number;
}

export interface UserInteface {
  email: string;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}
