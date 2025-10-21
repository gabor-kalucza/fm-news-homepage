import NavigationList from './NavigationList';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { ARIA_LABELS_EXPORTS, CLOSE_ICON } from '../constants';

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

interface SideNavigationProps {
  onClose: () => void;
}

const SideNavigation = ({ onClose }: SideNavigationProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useFocusTrap({
    containerRef: sidebarRef,
    initialFocusRef: closeButtonRef,
    onEscape: onClose,
  });

  return (
    <motion.div
      ref={sidebarRef}
      className="fixed top-0 right-0 z-40 h-full w-full max-w-[16rem] bg-white pt-[27px] pr-6 pl-[21px] shadow-lg md:max-w-78 md:pl-9"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label={ARIA_LABELS_EXPORTS.navigationMenu}
    >
      <div className="flex flex-col gap-[88px]">
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label={CLOSE_ICON.ariaLabel}
          className="w-max cursor-pointer self-end border-none bg-transparent p-0"
        >
          <img src={CLOSE_ICON.src} alt="" />
        </button>
        <nav>
          <NavigationList variant="mobile" />
        </nav>
      </div>
    </motion.div>
  );
};

export default SideNavigation;
