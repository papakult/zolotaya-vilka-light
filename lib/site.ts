/**
 * Единый файл с контактами и данными ресторана.
 * Всё, что нужно поменять (телефон, адрес, часы), меняется здесь.
 */
/** Фото берём с основного сайта: в этом репозитории только код светлой версии */
export const ASSET_URL = "https://zolotaya-vilka.vercel.app";

export const SITE_URL = "https://zolotaya-vilka-light.vercel.app";

export const site = {
  name: "Золотая Вилка",
  tagline: "домашний ресторан",
  phone: "+7 999 653-49-83",
  phoneHref: "tel:+79996534983",
  phoneE164: "+79996534983",
  address: "Сочи, Аллея Челтенхэма, 8/5",
  addressShort: "Аллея Челтенхэма, 8/5",
  addressNote: "Верхняя Мацеста, Сочи",
  /** Часы работы не подтверждены: время не указываем, пока не пришлют */
  hours: "Часы работы уточняйте по телефону",
  gis: "https://2gis.ru/sochi/geo/70000001116665161",
  mapQuery: "Сочи, Аллея Челтенхэма, 8/5",
  /** координаты из карточки 2ГИС */
  lat: 43.557344,
  lon: 39.794918,
  postalCode: "354024",
};

export const routeHref = site.gis;
export const mapEmbed = `https://yandex.ru/map-widget/v1/?ll=${site.lon},${site.lat}&z=16&pt=${site.lon},${site.lat},pm2rdm`;

export const nav = [
  { label: "Меню", href: "/menu" },
  { label: "О ресторане", href: "/#about" },
  { label: "Доставка", href: "/#delivery" },
  { label: "Бронь", href: "/#booking" },
  { label: "Контакты", href: "/#contacts" },
];

export const img = {
  terrace: ASSET_URL + "/images/interior/terrace.jpg",
  /** фасад и терраса: без машины, тёплая обработка, затемнённая улица */
  facade: ASSET_URL + "/images/interior/facade.jpg",
  hallChandelier: ASSET_URL + "/images/interior/hall-chandelier.jpg",
  bar: ASSET_URL + "/images/interior/bar.jpg",
  tableShelves: ASSET_URL + "/images/interior/table-shelves.jpg",
  hallWide: ASSET_URL + "/images/interior/hall-wide.jpg",
  /** Hero: столик у окна с золотыми шторами, тёплая вечерняя обработка */
  hero: ASSET_URL + "/images/interior/hero-atmosphere.jpg",
  /** Hero на телефонах: вертикальный кадр столика у окна */
  heroMobile: ASSET_URL + "/images/interior/hero-mobile.jpg",
  windowBooth: ASSET_URL + "/images/interior/window-booth.jpg",
  hallTables: ASSET_URL + "/images/interior/hall-tables.jpg",
  tapestryCabinet: ASSET_URL + "/images/interior/tapestry-cabinet.jpg",
  tapestryTable: ASSET_URL + "/images/interior/tapestry-table.jpg",
  barBull: ASSET_URL + "/images/interior/bar-bull.jpg",
};

/** Временное фото блюда. Позже заменить путь в каждой карточке на реальное фото. */
export const DISH_PLACEHOLDER = ASSET_URL + "/images/dishes/placeholder.svg";
