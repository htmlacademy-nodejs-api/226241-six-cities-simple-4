import { UserInteface } from "../../types/types";
import typegoose, {
  defaultClasses,
  getModelForClass,
} from "@typegoose/typegoose";
import { createSHA256 } from "../../core/helpers/index.js";

const { prop, modelOptions } = typegoose;

export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: "users",
  },
})
export class UserEntity
  extends defaultClasses.TimeStamps
  implements UserInteface
{
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: true, default: "" })
  public name: string;

  @prop({ required: true, default: false })
  public isPro = false;

  @prop({ required: true, default: "" })
  public avatarUrl: string;

  @prop({ required: true, default: "" })
  private password?: string;

  constructor(userData: UserInteface) {
    super();

    this.email = userData.email;
    this.name = userData.name;
    this.isPro = userData.isPro;
    this.avatarUrl = userData.avatarUrl;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
