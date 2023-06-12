import dayjs from "dayjs";
import { OfferGeneratorInterface } from "./offer-generator.interface.js";
import {
  generateRandomValue,
  getRandomItem,
} from "../../core/helpers/index.js";
import { MockDataType as MockDataType } from "../../types/mock-data";
import { OfferConstants } from "../../constants.js";
import { CityInterface } from "../../types/types.js";

const IMG_QTY = 20;
const MAX_COMMENTS = 10;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockDataType) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.title);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), "day")
      .toISOString();
    const city = getRandomItem<CityInterface>(this.mockData.cities);
    const cityName = city.name;
    const cityLatitude = city.location.latitude;
    const cityLongitude = city.location.longitude;
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
    const rating = generateRandomValue(
      OfferConstants.ratingMin,
      OfferConstants.ratingMax
    );
    const type = getRandomItem<string>(this.mockData.offer_types);
    const bedrooms = generateRandomValue(
      OfferConstants.bedroomsMin,
      OfferConstants.bedroomsMax
    );
    const maxAdults = generateRandomValue(
      OfferConstants.adultsMin,
      OfferConstants.adultsMax
    );
    const price = generateRandomValue(
      OfferConstants.priceMin,
      OfferConstants.priceMax
    );
    const goods = new Array(generateRandomValue(0, 6))
      .fill(undefined)
      .map((_item) => {
        return getRandomItem<string>(this.mockData.goods);
      });
    const uniqueGoods = [...new Set(goods)];
    const hostEmail = getRandomItem<string>(this.mockData.emails);
    const hostName = getRandomItem<string>(this.mockData.users);
    const hostIsPro = Boolean(generateRandomValue(0, 1));
    const hostAvatarUrl = getRandomItem<string>(this.mockData.avatars);
    const commentsQty = generateRandomValue(0, MAX_COMMENTS);
    const locationLatitude = generateRandomValue(
      city.location.latitude - 0.1,
      city.location.latitude + 0.1
    );
    const locationLongitude = generateRandomValue(
      city.location.longitude - 0.1,
      city.location.longitude + 0.1
    );

    return [
      title,
      description,
      postDate,
      cityName,
      cityLatitude,
      cityLongitude,
      previewImage,
      images,
      isPremium,
      rating,
      type,
      bedrooms,
      maxAdults,
      price,
      uniqueGoods,
      hostEmail,
      hostName,
      hostIsPro,
      hostAvatarUrl,
      commentsQty,
      locationLatitude,
      locationLongitude,
    ].join("\t");
  }
}
