import { readFileSync } from "node:fs";
import { FileReaderInterface } from "./file-reader.interface.js";
import { IOffer, TGoods, TOfferTypes } from "../../types/types.js";

export default class TSVFileReader implements FileReaderInterface {
  private rawData = "";

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: "utf8" });
  }

  public toArray(): IOffer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split("\n")
      .filter((row) => row.trim() !== "")
      .map((line) => line.split("\t"))
      .map(
        ([
          title,
          description,
          createdDate,
          city_name,
          city_latitude,
          city_longitude,
          city_zoom,
          preview_image,
          images,
          is_premium,
          rating,
          type,
          bedrooms,
          max_adults,
          price,
          goods,
          host_id,
          host_name,
          host_is_pro,
          host_avatar_url,
          comments_qty,
          location_latitude,
          location_longitude,
          location_zoom,
          id,
        ]) => ({
          title,
          description,
          postDate: new Date(Number(createdDate)),
          city: {
            name: city_name,
            location: {
              latitude: Number(city_latitude),
              longitude: Number(city_longitude),
              zoom: Number(city_zoom),
            },
          },
          preview_image,
          images: images.replace(/ */g, "").split(";"),
          is_premium: is_premium.toLowerCase() === "true",
          rating: Number(rating),
          type: type as TOfferTypes,
          bedrooms: Number(bedrooms),
          max_adults: Number(max_adults),
          price: Number(price),
          goods: goods.replace(/ */g, "").split(";") as TGoods[],
          host: {
            id: host_id,
            name: host_name,
            is_pro: host_is_pro.toLowerCase() === "true",
            avatar_url: host_avatar_url,
          },
          comments_qty: Number(comments_qty),
          location: {
            latitude: Number(location_latitude),
            longitude: Number(location_longitude),
            zoom: Number(location_zoom),
          },
          id,
        })
      );
  }
}
