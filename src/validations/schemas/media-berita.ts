import { z } from "zod";

const ALLOWED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];
const ALLOWED_IMAGE_EXT = ["jpeg", "jpg", , "png", "gif", "svg"];
const ALLOWED_VIDEO_MIME_TYPES = [
  "video/mp4",
  "video/webm",
  "video/ogg",
  "video/quicktime",
  "video/x-msvideo",
  "video/avi",
];
const ALLOWED_VIDEO_EXT = [
  "mp4",
  "webm",
  "ogg",
  "quicktime",
  "x-msvideo",
  "avi",
];
const MAX_FILE_SIZE = 1024 * 1024 * 1024;

export const MediaBeritaUploadInputSchema = z.object({
  urlMedia: z.string().min(1, "Sertakan file"),
  keterangan: z.string().min(1, "Sertakan keterangan"),
});

export type MediaBeritaUploadInputSchemaType = z.infer<
  typeof MediaBeritaUploadInputSchema
>;

export function getMediaTypeFromMime(
  mimeType: string
): "image" | "video" | "unknown" {
  if (ALLOWED_IMAGE_EXT.includes(mimeType)) {
    return "image";
  }
  if (ALLOWED_VIDEO_EXT.includes(mimeType)) {
    return "video";
  }
  return "unknown";
}
