import { easeInOut, stagger } from "framer-motion";


export const containerVariants = {
  // hidden: {
  //   opacity: 0,
  // },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

export const titleVariants={
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  }
}

export const yVariants ={
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
    }
  }
}