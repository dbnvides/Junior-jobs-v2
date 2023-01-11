export const slideLeftVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.4,
    },
  },
};

export const slideRightVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
export const slideDownVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
