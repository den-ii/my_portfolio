import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Section({ children, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} {...props}>
      <span
        style={{
          display: "block",
          transform: isInView ? "none" : "translateX(-1000px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}
