import { OfferConstants } from "../../../constants.js";
import { GoodsType, OfferTypesType } from "../../../types/types.js";
import { Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsMongoId,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { CityDto, LocationDto } from "./city.dto.js";

export default class CreateOfferDto {
  @MinLength(OfferConstants.nameMinLength, {
    message: `Minimum title length must be ${OfferConstants.nameMinLength}`,
  })
  @MaxLength(OfferConstants.nameMaxLength, {
    message: `Maximum title length must be ${OfferConstants.nameMaxLength}`,
  })
  public title!: string;

  @MinLength(OfferConstants.descMinLength, {
    message: `Minimum description length must be ${OfferConstants.descMinLength}`,
  })
  @MaxLength(OfferConstants.descMaxLength, {
    message: `Maximum description length must be ${OfferConstants.descMaxLength}`,
  })
  public description!: string;

  @IsDateString({}, { message: "postDate must be valid ISO date" })
  public postDate!: Date;

  @Type(() => CityDto)
  public city!: CityDto;

  @IsOptional()
  @IsString({ message: "image is required" })
  @MaxLength(256, { message: "Too short for field «image»" })
  public previewImage!: string;

  @IsArray()
  @ArrayMinSize(OfferConstants.imageArraySize, {
    message: `Minimum image array size must be ${OfferConstants.imageArraySize}`,
  })
  @ArrayMaxSize(OfferConstants.imageArraySize, {
    message: `Maximum image array size must be ${OfferConstants.imageArraySize}`,
  })
  @IsString({ each: true })
  public images!: string[];

  @IsBoolean()
  public isPremium!: boolean;

  @IsInt({ message: "Rating must be an integer" })
  @Min(OfferConstants.ratingMin, {
    message: `Minimum rating is ${OfferConstants.ratingMin}`,
  })
  @Max(OfferConstants.ratingMax, {
    message: `Maximum rating is ${OfferConstants.ratingMax}`,
  })
  public rating!: number;

  // @MinLength(OfferConstants.nameMinLength, {
  //   message: `Minimum title length must be ${OfferConstants.nameMinLength}`,
  // })
  // @MaxLength(OfferConstants.nameMaxLength, {
  //   message: `Maximum title length must be ${OfferConstants.nameMaxLength}`,
  // })
  public type!: OfferTypesType;

  @IsInt({ message: "Bedrooms must be an integer" })
  @Min(OfferConstants.bedroomsMin, {
    message: `Minimum bedrooms is ${OfferConstants.bedroomsMin}`,
  })
  @Max(OfferConstants.bedroomsMax, {
    message: `Maximum bedrooms is ${OfferConstants.bedroomsMax}`,
  })
  public bedrooms!: number;

  @IsInt({ message: "adults must be an integer" })
  @Min(OfferConstants.adultsMin, {
    message: `Minimum adults is ${OfferConstants.adultsMin}`,
  })
  @Max(OfferConstants.adultsMax, {
    message: `Maximum adults is ${OfferConstants.adultsMax}`,
  })
  public maxAdults!: number;

  @IsInt({ message: "Price must be an integer" })
  @Min(OfferConstants.priceMin, {
    message: `Minimum price is ${OfferConstants.priceMin}`,
  })
  @Max(OfferConstants.priceMax, {
    message: `Maximum price is ${OfferConstants.priceMax}`,
  })
  public price!: number;

  public goods!: GoodsType[];

  @IsMongoId({ message: "userId field must be valid an id" })
  public userId!: string;

  public commentsQty!: number;

  @Type(() => LocationDto)
  public location!: LocationDto;
}
