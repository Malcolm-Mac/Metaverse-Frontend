import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TypingText, Titletext } from "@/components/CustomTexts";
import { insights } from "@/constants";
import InsightCard from "@/components/InsightCard";

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <Titletext title="Insight about metaverse" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insights, index) => (
            <InsightCard key={`insight-${index}`} {...insights} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
