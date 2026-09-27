import type { Metadata, Viewport } from "next";
import Header from "@/components/HeaderLight";
import CallFab from "@/components/CallFab";
import MenuPage from "@/components/MenuPage";
import { FooterLight as Footer } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Меню ресторана «Золотая Вилка» — Сочи",
  description:
    "Завтраки, салаты, горячие блюда, мангал, десерты и доставка. Полное меню ресторана «Золотая Вилка» в Сочи.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Меню ресторана «Золотая Вилка» — Сочи",
    description: "Завтраки, салаты, горячие блюда, мангал, десерты и доставка. Полное меню ресторана «Золотая Вилка» в Сочи.",
    url: "/menu",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    siteName: "Золотая Вилка",
    locale: "ru_RU",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f6efe4" };

export default function Menu() {
  return (
    <>
      <Header active="Меню" />
      <main className="bg-cream-100">
        <MenuPage />
      </main>
      <Footer />
      <CallFab />
    </>
  );
}
