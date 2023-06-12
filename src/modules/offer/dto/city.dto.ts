import { Type } from "class-transformer";
import { IsNumber, IsString } from "class-validator";

export class LocationDto {
  @IsNumber()
  public latitude!: number;

  @IsNumber()
  public longitude!: number;
}

export class CityDto {
  @IsString({ message: "city name is required" })
  public name!: string;

  @Type(() => LocationDto)
  public location!: LocationDto;
}
