import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ArticleList from './components/ArticleList';
import FeaturedArticles from './components/FeaturedArticles';
import Header from './components/Header';
import Hero from './components/Hero';
import Overlay from './components/Overlay';
import SideNavigation from './components/SideNavigation';
import { useSidebar } from './hooks/useSidebar';

const App = () => {
  const { isSidebarVisible, toggleSidebar, closeSidebar } = useSidebar();
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1112 && isSidebarVisible) {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarVisible, closeSidebar]);

  useEffect(() => {
    if (isSidebarVisible) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('is-sidebar-open');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('is-sidebar-open');
    }

    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('is-sidebar-open');
    };
  }, [isSidebarVisible]);

  return (
    <>
      <AnimatePresence>
        {isSidebarVisible && (
          <>
            <Overlay onClick={closeSidebar} />
            <SideNavigation onClose={toggleSidebar} />
          </>
        )}
      </AnimatePresence>
      <div
        ref={mainContentRef}
        className={`wrapper font-inter mx-auto max-w-278 px-4 pb-22.25 md:px-20 lg:px-0 ${isSidebarVisible ? 'pointer-events-none' : 'pointer-events-auto'}`}
        aria-hidden={isSidebarVisible}
      >
        <Header onMenuToggle={toggleSidebar} isSidebarVisible={isSidebarVisible} />
        <main>
          <div className="mb-16 grid gap-16 lg:grid-cols-[1fr_21.875rem] lg:gap-8">
            <Hero />
            <FeaturedArticles />
          </div>
          <ArticleList />
        </main>
      </div>
    </>
  );
};

export default App;
