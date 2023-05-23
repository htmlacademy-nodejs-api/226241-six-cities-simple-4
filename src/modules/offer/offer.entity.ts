import typegoose, {
  defaultClasses,
  getModelForClass,
  Ref,
} from "@typegoose/typegoose";
import {
  CityInterface,
  GoodsType,
  LocationInterface,
  OfferTypesType,
  UserInteface,
} from "../../types/types.js";
// import { OfferType } from '../../types/offer-type.enum.js';
// import { CategoryEntity } from '../category/category.entity.js';
import { UserEntity } from "../user/user.entity.js";

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: "offers",
  },
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true, minlength: 10, maxlength: 100 })
  public title!: string;

  @prop({ required: true, minlength: 20, maxlength: 1024 })
  public description!: string;

  @prop({ required: true })
  public postDate!: string;

  @prop({ required: true })
  public city!: CityInterface;

  @prop({ required: true })
  public previewImage!: string;

  @prop({ required: true })
  public images!: string[];

  @prop({ required: true })
  public isPremium!: boolean;

  @prop({ required: true, min: 1, max: 5 })
  public rating!: number;

  @prop({ required: true })
  public type!: OfferTypesType;

  @prop({ required: true, min: 1, max: 8 })
  public bedrooms!: number;

  @prop({ required: true, min: 1, max: 10 })
  public maxAdults!: number;

  @prop({ required: true, min: 100, max: 100000 })
  public price!: number;

  @prop({ required: true })
  public goods!: GoodsType[];

  @prop({ required: true })
  public host!: UserInteface;

  @prop({ required: true })
  public commentsQty!: number;

  @prop({ required: true })
  public location!: LocationInterface;

  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
