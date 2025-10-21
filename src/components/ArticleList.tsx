import { ARIA_LABELS_EXPORTS, ARTICLE_LIST_CONTENT } from '../constants';

const ArticleList = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        {ARTICLE_LIST_CONTENT.map((article) => (
          <li key={article.number} className="flex gap-6">
            <div className="w-25 shrink-0">
              <img
                className="block h-full w-full object-cover"
                src={article.imgSrc}
                alt={article.imgAlt}
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <span className="text-preset-3 text-red-500">{article.number}</span>
              <h3 className="text-navy-950 text-preset-5">
                <a
                  href="#"
                  className="transition hover:text-red-500"
                  aria-label={ARIA_LABELS_EXPORTS.readMoreArticle(article.headline)}
                >
                  {article.headline}
                </a>
              </h3>
              <p className="text-navy-600 text-preset-6">{article.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
