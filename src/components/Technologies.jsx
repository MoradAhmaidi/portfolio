import { ImOpera } from "react-icons/im";
import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { SiDotnet } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconsVariants(1.5)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <RiReactjsLine className="text-6xl text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <RiAngularjsFill className="text-6xl text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <SiDotnet className="text-6xl text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(3)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <SiSpring className="text-6xl text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(3.5)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <SiMicrosoftsqlserver className="text-6xl text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <SiPostgresql className="text-6xl text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconsVariants(4.5)}
          initial="initial"
          whileInView="animate"
          className="rounded-2xl border-4 border-neutral-300 p-4"
        >
          <SiMongodb className="text-6xl text-neutral-300" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
