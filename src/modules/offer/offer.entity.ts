import typegoose, {
  defaultClasses,
  getModelForClass,
  Ref,
} from "@typegoose/typegoose";
import { OfferConstants } from "../../constants.js";
import {
  CityInterface,
  GoodsType,
  LocationInterface,
  OfferTypesType,
} from "../../types/types.js";
import { UserEntity } from "../user/user.entity.js";

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: "offers",
  },
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    minlength: OfferConstants.nameMinLength,
    maxlength: OfferConstants.nameMaxLength,
  })
  public title!: string;

  @prop({
    required: true,
    minlength: OfferConstants.descMinLength,
    maxlength: OfferConstants.descMaxLength,
  })
  public description!: string;

  @prop({ required: true })
  public postDate!: Date;

  @prop({ required: true })
  public city!: CityInterface;

  @prop({ default: "" })
  public previewImage!: string;

  @prop({ required: true })
  public images!: string[];

  @prop({ required: true })
  public isPremium!: boolean;

  @prop({
    required: true,
    min: OfferConstants.ratingMin,
    max: OfferConstants.ratingMax,
  })
  public rating!: number;

  @prop({ required: true })
  public type!: OfferTypesType;

  @prop({
    required: true,
    min: OfferConstants.bedroomsMin,
    max: OfferConstants.bedroomsMax,
  })
  public bedrooms!: number;

  @prop({
    required: true,
    min: OfferConstants.adultsMin,
    max: OfferConstants.adultsMax,
  })
  public maxAdults!: number;

  @prop({
    required: true,
    min: OfferConstants.priceMin,
    max: OfferConstants.priceMax,
  })
  public price!: number;

  @prop({ required: true })
  public goods!: GoodsType[];

  @prop({ required: true })
  public commentsQty!: number;

  @prop({ required: true })
  public location!: LocationInterface;

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
