import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { socials } from "@/constants";

const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-betwwen flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img src="/headset.svg" alt="headset" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
