import {
  OfferInterface,
  GoodsType,
  OfferTypesType,
} from "../../types/types.js";

export function createOffer(offerData: string): OfferInterface {
  const [
    title,
    description,
    createdDate,
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
    goods,
    hostId,
    hostName,
    hostIsPro,
    hostAvatarUrl,
    commentsQty,
    locationLatitude,
    locationLongitude,
    id,
  ] = offerData.replace("\n", "").split("\t");

  return {
    title,
    description,
    postDate: new Date(Number(createdDate)),
    city: {
      name: cityName,
      location: {
        latitude: Number(cityLatitude),
        longitude: Number(cityLongitude),
      },
    },
    previewImage: previewImage,
    images: images.replace(/ */g, "").split(";"),
    isPremium: isPremium.toLowerCase() === "true",
    rating: Number(rating),
    type: type as OfferTypesType,
    bedrooms: Number(bedrooms),
    maxAdults: Number(maxAdults),
    price: Number(price),
    goods: goods.replace(/ */g, "").split(";") as GoodsType[],
    host: {
      email: hostId,
      name: hostName,
      isPro: hostIsPro.toLowerCase() === "true",
      avatarUrl: hostAvatarUrl,
    },
    commentsQty: Number(commentsQty),
    location: {
      latitude: Number(locationLatitude),
      longitude: Number(locationLongitude),
    },
    id,
  } as OfferInterface;
}
