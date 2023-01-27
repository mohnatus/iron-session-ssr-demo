import { IronSessionOptions } from "iron-session";

export const PASS = 'complex_password_at_least_32_characters_long';
export const COOKIE_NAME = 'myapp_cookiename';

export const IRON_OPTIONS: IronSessionOptions = {
  password: PASS,
  cookieName: COOKIE_NAME
}