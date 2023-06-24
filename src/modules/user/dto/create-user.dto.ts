import { IsBoolean, IsEmail, IsString, Length } from "class-validator";
import { UserConstants } from "../user.constant.js";

export default class CreateUserDto {
  @IsEmail({}, { message: "email must be valid address" })
  public email!: string;

  @IsString({ message: "name is required" })
  public name!: string;

  @IsBoolean()
  public isPro!: boolean;

  @Length(UserConstants.passMinLength, UserConstants.passMaxLength, {
    message: `Min length for password is ${UserConstants.nameMinLength}, max is ${UserConstants.nameMaxLength}`,
  })
  public password!: string;
}
