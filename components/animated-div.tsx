"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";

type AnimatedDivProps = MotionProps & React.ComponentPropsWithoutRef<"div">;
const AnimatedDiv = React.forwardRef<React.ElementRef<"div">, AnimatedDivProps>(
  (props, ref) => {
    const Component = motion.div;
    return <Component ref={ref} {...props} />;
  }
);
AnimatedDiv.displayName = "AnimatedDiv";

export { AnimatedDiv };
