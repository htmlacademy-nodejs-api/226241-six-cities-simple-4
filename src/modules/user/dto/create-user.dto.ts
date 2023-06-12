import {
  IsEmail,
  IsOptional,
  IsString,
  Length,
  // isBoolean,
} from "class-validator";

enum UserConstants {
  nameMinLength = 1,
  nameMaxLength = 15,
  passMinLength = 6,
  passMaxLength = 12,
}

export default class CreateUserDto {
  @IsEmail({}, { message: "email must be valid address" })
  public email!: string;

  @IsString({ message: "name is required" })
  public name!: string;

  // @isBoolean()
  public isPro!: boolean;

  @IsOptional()
  @IsString({ message: "avatarUrl is required" })
  public avatarUrl!: string;

  @Length(UserConstants.passMinLength, UserConstants.passMaxLength, {
    message: `Min length for password is ${UserConstants.nameMinLength}, max is ${UserConstants.nameMaxLength}`,
  })
  public password!: string;
}
