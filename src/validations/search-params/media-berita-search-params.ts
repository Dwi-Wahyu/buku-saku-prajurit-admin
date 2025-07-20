import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsIsoDate,
} from "nuqs/server";

export const MediaBeritaSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  tanggal: parseAsIsoDate,
});

export type MediaBeritaSearchParamsType = {
  page: number;
  perPage: number;
  tanggal: Date | null;
};
