export const navItems = [
  { name: "Dashboard", icon: "/assets/icons/dashboard.svg", url: "/" },
  { name: "Documents", icon: "/assets/icons/documents.svg", url: "/documents" },
  { name: "Images", icon: "/assets/icons/images.svg", url: "/images" },
  { name: "Media", icon: "/assets/icons/video.svg", url: "/media" },
  { name: "Others", icon: "/assets/icons/others.svg", url: "/others" },
];

export const actionDropdownItems = [
    {
        label: "Rename",
        icon: "/assets/icons/edit.svg",
        value: "rename",
    },
    {
        label: "Details",
        icon: "/assets/icons/info.svg",
        value: "details",
    },
    {
        label: "Share",
        icon: "/assets/icons/share.svg",
        value: "share",
    },
    {
        label: "Size (Highest)",
        value: "size-desc",
    },
    {
        label: "Size (Lowest)",
        value: "size-asc",
    },
];

export const avatarPlaceholder = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg";

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // i.e. 50MB