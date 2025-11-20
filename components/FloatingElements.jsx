"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate all random values on the client ONLY (after hydration)
    const generated = [...Array(6)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      floatX: Math.random() * 20 - 10,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    setElements(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, el.floatX, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
          }}
        />
      ))}
    </div>
  );
}
