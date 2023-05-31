import { OfferTypesType } from "../../../types/types";

export default class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public image?: string;
  public type?: OfferTypesType;
  public price?: number;
  public categories?: string[];
}
