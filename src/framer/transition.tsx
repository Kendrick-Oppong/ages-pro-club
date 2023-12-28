import { motion } from "framer-motion";

export const transition = (Component: React.FC) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: .6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ delay: 0.4, duration: .4, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
