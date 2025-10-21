import { useState, useCallback } from 'react';

export const useSidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarVisible((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarVisible(false);
  }, []);

  const openSidebar = useCallback(() => {
    setIsSidebarVisible(true);
  }, []);

  return {
    isSidebarVisible,
    toggleSidebar,
    closeSidebar,
    openSidebar,
  };
};
