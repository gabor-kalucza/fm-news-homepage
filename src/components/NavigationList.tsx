import { NAV_ITEMS_WITH_LABELS } from '../constants';

interface NavigationListProps {
  variant?: 'desktop' | 'mobile';
}

const NavigationList = ({ variant = 'desktop' }: NavigationListProps) => {
  const baseClasses = 'text-preset-6 transition hover:text-red-500';
  const variantClasses = {
    desktop: 'hidden gap-10 lg:flex text-navy-600',
    mobile: 'flex flex-col gap-6 text-navy-950',
  };

  return (
    <ul className={variantClasses[variant]}>
      {NAV_ITEMS_WITH_LABELS.map((item) => (
        <li className={`${baseClasses} w-fit`} key={item.label}>
          <a href="#" aria-label={item.ariaLabel as string}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
