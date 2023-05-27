import {
  CityInterface,
  GoodsType,
  LocationInterface,
  OfferTypesType,
  UserInteface,
} from "../../../types/types.js";

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: CityInterface;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: OfferTypesType;
  public bedrooms!: number;
  public maxAdults!: number;
  public price!: number;
  public goods!: GoodsType[];
  public host!: UserInteface;
  public commentsQty!: number;
  public location!: LocationInterface;
  public userId!: string;
}
