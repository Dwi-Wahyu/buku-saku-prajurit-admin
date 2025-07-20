import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const BeritaSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  judul: parseAsString.withDefault(""),
});

export type BeritaSearchParamsType = {
  page: number;
  perPage: number;
  judul: string;
};
