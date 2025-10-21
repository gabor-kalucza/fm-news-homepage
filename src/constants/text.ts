export const NAV_ITEMS = ['Home', 'New', 'Popular', 'Trending', 'Categories'] as const;

export const FEATURED_ITEMS = [
  {
    headline: 'Hydrogen VS Electric Cars',
    description: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    headline: 'The Downsides of AI Artistry',
    description: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    headline: 'Is VC Funding Drying Up?',
    description: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
] as const;

export const HERO = {
  headline: 'The Bright Future of Web 3.0?',
  description:
    'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
  buttonText: 'Read more',
} as const;

export const ARTICLES = [
  {
    number: '01',
    headline: 'Reviving Retro PCs',
    description: 'What happens when old PCs are given modern upgrades?',
  },
  {
    number: '02',
    headline: 'Top 10 Laptops of 2022',
    description: 'Our best picks for various needs and budgets.',
  },
  {
    number: '03',
    headline: 'The Growth of Gaming',
    description: 'How the pandemic has sparked fresh opportunities.',
  },
] as const;
