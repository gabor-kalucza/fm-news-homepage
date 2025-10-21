import { HERO_CONTENT } from '../constants';

const Hero = () => {
  const { mobileImg, desktopImg, headline, description, buttonText, buttonAriaLabel } =
    HERO_CONTENT;

  return (
    <section className="hero grid grid-cols-1 gap-6">
      <picture>
        <source media="(min-width: 48rem)" srcSet={desktopImg.src} />
        <img className="w-full" src={mobileImg.src} alt={mobileImg.alt} />
      </picture>
      <article className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <h1 className="text-preset-2 text-navy-950 lg:text-preset-1">{headline}</h1>
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-preset-6 text-navy-600">{description}</p>
          <button
            type="button"
            aria-label={buttonAriaLabel}
            className="text-navy-950 text-preset-7 hover:bg-navy-950 block w-max cursor-pointer bg-red-500 px-8 py-3 uppercase transition hover:text-white"
          >
            {buttonText}
          </button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
