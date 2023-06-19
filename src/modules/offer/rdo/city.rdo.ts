import { Expose, Type } from "class-transformer";

export class LocationRdo {
  @Expose()
  public latitude!: number;

  @Expose()
  public longitude!: number;
}

export class CityRdo {
  @Expose()
  public name!: string;

  @Expose()
  @Type(() => LocationRdo)
  public location!: LocationRdo;
}
