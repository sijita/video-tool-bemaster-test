"use client";
import { useSidebar } from "@/store/sidebar";
import { IconMenu } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isOpen = useSidebar((state) => state.isOpen);
  const toggleSidebar = useSidebar((state) => state.toggle);

  return (
    <main className="p-10 bg-white rounded-xl shadow w-full relative">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSidebar}
            className="absolute left-3 top-3 p-1 hover:bg-indigo-100 rounded-full self-start"
          >
            <IconMenu size={25} />
          </motion.button>
        )}
      </AnimatePresence>
      {children}
    </main>
  );
}
