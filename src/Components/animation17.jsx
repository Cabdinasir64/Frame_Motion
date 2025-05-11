import { motion, useMotionValue, useTransform } from "framer-motion";

export default function animation17() {
  const x = useMotionValue(0);
  const width = useTransform(x, [0, 400], [100, 500]);

  return (
    <div className="flex flex-col space-y-4">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 400 }}
        style={{
          x,
          width: 100,
          height: 50,
          background: "red",
        }}
      />
      <motion.div
        style={{
          width,
          height: 10,
          background: "green",
          marginTop: 20,
        }}
      />
    </div>
  );
}
