import { FEATURED_CONTENT } from '../constants/content';

const FeaturedArticles = () => {
  const { title, items } = FEATURED_CONTENT;

  return (
    <section className="bg-navy-950 px-6 py-4 text-white md:px-10 md:py-8 lg:px-6 lg:py-[32.5px]">
      <h2 className="text-gold-400 text-preset-3 mb-8 text-[40px]">{title}</h2>
      <ul>
        {items.map((item, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === items.length - 1;

          return (
            <li
              key={item.headline}
              className={`flex flex-col gap-2 ${!isLast ? 'border-navy-600 border-b pb-8' : ''} ${!isFirst ? 'pt-8' : ''}`}
            >
              <h3 className="text-preset-4">
                <a href="#" className="hover:text-gold-400 transition">
                  {item.headline}
                </a>
              </h3>
              <p className="text-preset-6 text-grey-300">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FeaturedArticles;
