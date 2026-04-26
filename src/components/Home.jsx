import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Hi, I'm Fidha 👋</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Frontend Developer | React | UI Design
        </p>
      </motion.div>
    </div>
  );
}