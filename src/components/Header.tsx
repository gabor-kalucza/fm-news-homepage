import { LOGO, MENU_ICON } from '../constants';
import NavigationList from './NavigationList';

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarVisible: boolean;
}

const Header = ({ onMenuToggle, isSidebarVisible }: HeaderProps) => {
  return (
    <header className="min-sup-sm:bg-red-300 mb-8 flex items-center justify-between pt-7 lg:mb-16 lg:pt-22.25">
      <img className="main-logo" src={LOGO.src} alt={LOGO.alt} />
      <nav>
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label={MENU_ICON.ariaLabel}
          aria-expanded={isSidebarVisible}
          className="block cursor-pointer border-none bg-transparent p-0 lg:hidden"
        >
          <img src={MENU_ICON.src} alt="" />
        </button>

        <NavigationList variant="desktop" />
      </nav>
    </header>
  );
};

export default Header;
