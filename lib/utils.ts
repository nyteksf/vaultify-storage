import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: unknown) => {
  return JSON.parse(JSON.stringify(value));
};

export const convertFileToURL = (file: File) => {
  URL.createObjectURL(file);
};

export const getFileIcon = (
  extension: string | undefined,
  type: FileType | string
) => {
  switch (extension) {
    // DOCUMENT
    case "pdf":
      return "/assets/icons/file-pdf.svg";
    case "doc":
      return "/assets/icons/file-doc.svg";
    case "docx":
      return "/assets/icons/file-docx.svg";
    case "csv":
      return "/assets/icons/file-csv.svg";
    case "txt":
      return "/assets/icons/file-txt.svg";
    // NO SPECIFIC DOCTYPE ICONS AVAILABLE
    case "xls":
    case "xlsx":
    case "rtf":
    case "ods":
    case "ppt":
    case "odp":
    case "md":
    case "html":
    case "htm":
    case "epub":
    case "pages":
    case "fig":
    case "psd":
    case "ai":
    case "indd":
    case "xd":
    case "sketch":
    case "afdesign":
    case "afphoto":
    case "js":
    case "ts":
    case "jsx":
    case "tsx":
    case "css":
    case "json":
    case "php":
      return "/assets/icons/file-document.svg";
    // Image
    case "svg":
      return "/assets/icons/file-image.svg";
    // Video
    case "mkv":
    case "mov":
    case "avi":
    case "wmv":
    case "mp4":
    case "flv":
    case "webm":
    case "m4v":
    case "3gp":
      return "/assets/icons/file-video.svg";
    // Audio
    case "mp3":
    case "mpeg":
    case "wav":
    case "aac":
    case "flac":
    case "ogg":
    case "wma":
    case "m4a":
    case "aiff":
    case "alac":
      return "/assets/icons/file-audio.svg";

    default:
      switch (type) {
        case "image":
          return "/assets/icons/file-image.svg";
        case "document":
          return "/assets/icons/file-document.svg";
        case "video":
          return "/assets/icons/file-video.svg";
        case "audio":
          return "/assets/icons/file-audio.svg";
        default:
          return "/assets/icons/file-other.svg";
      }
  }
};

// APPWRITE URL UTILS
// Construct appwrite file URL - https://appwrite.io/docs/apis/rest#images
export const constructFileUrl = (bucketFileId: string) => {
  return `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET}/files/${bucketFileId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`;
};

export const getFileType = (fileName: string) => {
  // EXTRACT EXTENSION
  const extension = fileName.toLowerCase().split(".").pop() || "";

  if (!extension) return { type: "other", extension: "" };

  const documentExtensions = [
    "pdf",
    "doc",
    "docx",
    "txt",
    "xls",
    "xlsx",
    "csv",
    "rtf",
    "ods",
    "ppt",
    "odp",
    "md",
    "html",
    "htm",
    "epub",
    "pages",
    "fig",
    "psd",
    "ai",
    "indd",
    "xd",
    "sketch",
    "afdesign",
    "afphoto",
    "js",
    "ts",
    "jsx",
    "tsx",
    "css",
    "json",
    "php",
  ];

  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "svg",
    "webp",
    "ico",
  ];

  const videoExtensions = [
    "mp4",
    "mov",
    "avi",
    "webm",
    "mkv",
    "flv",
    "vtt",
    "m3u8",
    "m4v",
    "weba",
    "mpeg",
    "mj2",
    "mjpeg",
    "mka",
  ];

  const audioExtensions = [
    "mp3",
    "wav",
    "ogg",
    "flac",
    "aac",
    "m4a",
    "aiff",
    "aifc",
    "wma",
    "oga",
    "m4b",
    "m4r",
    "m4p",
    "m4u",
    "mpa",
    "mpc",
  ];

  const otherExtensions = [
    "zip",
    "rar",
    "7z",
    "tar",
    "gzip",
    "tgz",
    "bz2",
    "xz",
    "zst",
    "iso",
    "cbr",
    "cbz",
    "cb7",
    "cbd",
    "dmg",
    "img",
    "vmdk",
    "wim",
    "mdf",
    "com",
    "exe",
  ];

  if (documentExtensions.includes(extension))
    return { type: "document", extension };
  if (imageExtensions.includes(extension)) return { type: "image", extension };
  if (videoExtensions.includes(extension)) return { type: "video", extension };
  if (audioExtensions.includes(extension)) return { type: "audio", extension };
  if (otherExtensions.includes(extension) || extension === "") {
    return { type: "other", extension };
  }
};