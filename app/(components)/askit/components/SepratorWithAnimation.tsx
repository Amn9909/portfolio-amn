"use client";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export interface SepratorProps {
  duration: number;
  x: string;
  y: string;
  opacity: number;
}

const SepratorWithAnimation = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 1, ease: "backOut" }}
    >
      <Separator className="mb-2" />
    </motion.div>
  );
};

export default SepratorWithAnimation;
