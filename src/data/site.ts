export const site = {
  companyName: "快靚正搬屋公司 / 貨運公司",
  shortName: "快靚正搬屋",
  phone: "93577729",
  phoneDisplay: "9357 7729",
  phoneHref: "tel:93577729",
  whatsappHref: "https://wa.me/85293577729",
  title: "快靚正搬屋公司｜香港搬屋、搬運、傢俬拆裝、存倉服務",
  description:
    "快靚正搬屋公司提供香港住宅搬屋、寫字樓搬遷、傢俬拆裝、包裝物料、棄置傢俬及存倉服務。WhatsApp 傳相即可初步報價。",
  canonicalUrl: "https://www.your-domain.com/",
  ogImage: "/images/hero-moving-truck.png",
  favicon: "/favicon.svg",
  areaServed: "Hong Kong",
  openingHours: "每日 08:00 - 22:00",
  slogan: "快、靚、正，搬屋貨運一站式搞掂",
  socialLinks: {
    googleBusinessProfile: "#",
    facebook: "#",
    instagram: "#",
    xiaohongshu: "#",
    youtube: "#"
  }
};

export const navigation = [
  { label: "服務", href: "#services" },
  { label: "報價流程", href: "#quote-process" },
  { label: "收費", href: "#pricing" },
  { label: "存倉", href: "#storage" },
  { label: "Checklist", href: "#checklist" },
  { label: "FAQ", href: "#faq" }
];

export const heroHighlights = [
  "村屋吊運 / 大型傢俬上落",
  "住宅搬屋 / 寫字樓搬遷",
  "傢俬拆裝 / 包裝保護",
  "存倉 / 棄置傢俬"
];

export const trustPoints = [
  { value: "全港", label: "香港各區服務" },
  { value: "即日", label: "有期可快速安排" },
  { value: "清楚", label: "搬前先講明收費" }
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.companyName,
  description: site.description,
  telephone: "+85293577729",
  url: site.canonicalUrl,
  image: `${site.canonicalUrl.replace(/\/$/, "")}${site.ogImage}`,
  areaServed: site.areaServed,
  openingHours: "Mo-Su 08:00-22:00",
  priceRange: "$$",
  serviceType: [
    "香港住宅搬屋",
    "村屋吊運",
    "寫字樓搬遷",
    "傢俬拆裝",
    "包裝物料",
    "棄置傢俬",
    "存倉服務"
  ],
  sameAs: [site.whatsappHref]
};
