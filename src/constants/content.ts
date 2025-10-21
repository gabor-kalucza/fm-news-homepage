import { IMAGES } from './assets';
import { NAV_ITEMS, FEATURED_ITEMS, HERO, ARTICLES } from './text';
import { ALT_TEXT, ARIA_LABELS } from './accessibility';

const navLabels = Object.keys(ARIA_LABELS.navigation).filter(
  (key) => !['menu', 'openMenu', 'closeMenu'].includes(key),
);

export const NAV_ITEMS_WITH_LABELS = NAV_ITEMS.map((label, index) => ({
  label,
  ariaLabel: ARIA_LABELS.navigation[navLabels[index] as keyof typeof ARIA_LABELS.navigation],
}));

export const LOGO = {
  src: IMAGES.logo,
  alt: ALT_TEXT.logo,
};

export const MENU_ICON = {
  src: IMAGES.menuIcon,
  alt: '',
  ariaLabel: ARIA_LABELS.navigation.openMenu,
};

export const CLOSE_ICON = {
  src: IMAGES.closeIcon,
  alt: '',
  ariaLabel: ARIA_LABELS.navigation.closeMenu,
};

export { ARIA_LABELS };

export const ARIA_LABELS_EXPORTS = {
  navigationMenu: ARIA_LABELS.navigation.menu,
  readMoreArticle: ARIA_LABELS.actions.readMoreArticle,
};

export const FEATURED_CONTENT = {
  title: 'New',
  items: FEATURED_ITEMS,
};

export const HERO_CONTENT = {
  mobileImg: {
    src: IMAGES.heroMobile,
    alt: ALT_TEXT.heroImage,
  },
  desktopImg: {
    src: IMAGES.heroDesktop,
    alt: ALT_TEXT.heroImage,
  },
  headline: HERO.headline,
  description: HERO.description,
  buttonText: HERO.buttonText,
  buttonAriaLabel: ARIA_LABELS.actions.readMoreHero,
};

export const ARTICLE_LIST_CONTENT = ARTICLES.map((article, index) => ({
  imgSrc: Object.values(IMAGES)[index + 5],
  imgAlt: Object.values(ALT_TEXT)[index + 1],
  number: article.number,
  headline: article.headline,
  description: article.description,
}));
