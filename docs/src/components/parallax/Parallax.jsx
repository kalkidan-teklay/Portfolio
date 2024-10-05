import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {/* Paragraph to be displayed in the middle */}
      <motion.div className="paragraphContainer" style={{ y: yText }}>
        <p>
          My name is Kalkidan T/haimanot, and I am a 4th-year Software Engineering student at AAiT. I specialize in developing both websites and mobile applications, with proficiency in Python, JavaScript, HTML, CSS, and React.
        </p>
      </motion.div>

      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url("${import.meta.env.BASE_URL}sun.png")`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
