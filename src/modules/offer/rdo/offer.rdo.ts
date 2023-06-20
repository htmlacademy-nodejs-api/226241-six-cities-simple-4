import { Expose, Type } from "class-transformer";
import { GoodsType, OfferTypesType } from "../../../types/types.js";
import UserRdo from "../../user/rdo/user.rdo.js";
import { CityRdo, LocationRdo } from "./city.rdo.js";

// Здесь надо делать исправления
export default class OfferRdo {
  @Expose()
  public id!: string;

  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  @Type(() => CityRdo)
  public city!: CityRdo;

  @Expose()
  public previewImage!: string;

  @Expose()
  public images!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: OfferTypesType;

  @Expose()
  public bedrooms!: number;

  @Expose()
  public maxAdults!: number;

  @Expose()
  public price!: number;

  @Expose()
  public goods!: GoodsType[];

  @Expose({ name: "userId" })
  @Type(() => UserRdo)
  public host!: UserRdo;

  @Expose()
  public commentsQty!: number;

  @Expose()
  public location!: LocationRdo;
}
