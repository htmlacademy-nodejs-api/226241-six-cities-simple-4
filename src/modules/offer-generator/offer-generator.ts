import dayjs from "dayjs";
import { IOfferGenerator } from "./offer-generator.interface.js";
import {
  generateRandomValue,
  getRandomItem,
} from "../../core/helpers/index.js";
import { TMockData } from "../../types/mock-data";
import { ICity } from "../../types/types.js";

const MAX_RATING = 5;
const MAX_BEDROOMS = 5;
const MAX_ADULTS = 5;
const IMG_QTY = 20;
const MAX_COMMENTS = 10;
const MIN_PRICE = 200;
const MAX_PRICE = 2000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements IOfferGenerator {
  constructor(private readonly mockData: TMockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.title);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), "day")
      .toISOString();
    const city = getRandomItem<ICity>(this.mockData.cities);
    const cityName = city.name;
    const cityLatitude = city.location.latitude;
    const cityLongitude = city.location.longitude;
    const cityZoom = city.location.zoom;
    const previewImage =
      this.mockData.img_url +
      generateRandomValue(0, IMG_QTY).toString() +
      ".jpg";
    const images = new Array(6).fill(
      this.mockData.img_url +
        generateRandomValue(0, IMG_QTY).toString() +
        ".jpg"
    );
    const isPremium = Boolean(generateRandomValue(0, 1));
    const rating = generateRandomValue(0, MAX_RATING);
    const type = getRandomItem<string>(this.mockData.offer_types);
    const bedrooms = generateRandomValue(1, MAX_BEDROOMS);
    const maxAdults = generateRandomValue(1, MAX_ADULTS);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const goods = getRandomItem<string>(this.mockData.goods);
    const hostId = "123";
    const hostName = "123";
    const hostIsPro = Boolean(generateRandomValue(0, 1));
    const hostAvatarUrl = "123";
    const commentsQty = generateRandomValue(0, MAX_COMMENTS);
    const locationLatitude = generateRandomValue(
      city.location.latitude - 5,
      city.location.latitude + 5
    );
    const locationLongitude = generateRandomValue(
      city.location.longitude - 5,
      city.location.longitude + 5
    );
    const locationZoom = city.location.zoom;
    const id = "123";

    return [
      title,
      description,
      createdDate,
      cityName,
      cityLatitude,
      cityLongitude,
      cityZoom,
      previewImage,
      images,
      isPremium,
      rating,
      type,
      bedrooms,
      maxAdults,
      price,
      goods,
      hostId,
      hostName,
      hostIsPro,
      hostAvatarUrl,
      commentsQty,
      locationLatitude,
      locationLongitude,
      locationZoom,
      id,
    ].join("\t");
  }
}
