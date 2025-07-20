import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const UserSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  nama: parseAsString.withDefault(""),
  role: parseAsString.withDefault(""),
  pangkat: parseAsString.withDefault(""),
});

export type UserSearchParamsType = {
  page: number;
  perPage: number;
  nama: string;
  role: string;
  pangkat: string;
};
