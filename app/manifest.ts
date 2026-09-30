import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IGGOULFANE",
    short_name: "IGGOULFANE",
    description: "تعاونية IGGOULFANE للعسل الطبيعي في تابونت، ورزازات.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf9f3",
    theme_color: "#2b201b",
    icons: [{ src: "/iggoulfane-logo.jpeg", sizes: "any", type: "image/jpeg" }],
  };
}
