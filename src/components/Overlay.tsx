import { motion } from 'framer-motion';

const Overlay = ({ onClick }: { onClick?: () => void }) => (
  <motion.div
    className="fixed inset-0 z-30 bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.6 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  />
);

export default Overlay;
