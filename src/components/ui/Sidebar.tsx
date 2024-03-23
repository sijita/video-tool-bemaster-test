"use client";
import {
  IconChartHistogram,
  IconChevronLeft,
  IconFolder,
  IconHelp,
  IconLayoutDashboard,
  IconPlayerPlay,
  IconSettings,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/store/sidebar";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard", href: "#", icon: IconLayoutDashboard },
  { name: "Videos", href: "/videos", icon: IconFolder },
  { name: "Player", href: "#", icon: IconPlayerPlay },
  { name: "Analytics", href: "#", icon: IconChartHistogram },
  { name: "Configuraciones", href: "#", icon: IconSettings },
  { name: "Ayuda", href: "#", icon: IconHelp },
];

const variants = {
  open: { opacity: 1, x: 0, display: "block" },
  closed: { opacity: 0, x: "-100%", transitionEnd: { display: "none" } },
};

export default function Sidebar() {
  const pathname = usePathname();
  const isOpen = useSidebar((state) => state.isOpen);
  const toggleSidebar = useSidebar((state) => state.toggle);

  return (
    <motion.aside
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.4 }}
      className="min-w-[17rem] max-lg:fixed top-0 left-0 overflow-auto h-full rounded-xl bg-white shadow lg:relative z-10"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSidebar}
        className="absolute p-1 hover:bg-indigo-100 rounded-full right-3 top-3"
      >
        <IconChevronLeft size={25} />
      </motion.button>
      <div className="flex flex-col h-full justify-between gap-5 px-5 py-6 overflow-auto">
        <div className="w-full grid place-content-center p-10">
          <span className="grid w-16 h-16 place-content-center rounded-xl bg-indigo-600">
            <div className="border-4 border-white rounded-full p-1">
              <IconPlayerPlay color="#fff" size={40} stroke={3} />
            </div>
          </span>
        </div>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`flex gap-5 items-center px-4 py-3 text-gray-700 rounded-md hover:bg-indigo-100 ${
                  pathname.includes(item.href) && "bg-indigo-600 text-white"
                }`}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="bg-gray-100 p-3 rounded-xl flex flex-col gap-5 mt-10">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Mi Plan - Plus</p>
            <p className="text-xs text-gray-500">
              El uso se renueva el: 3-may-23
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between gap-5">
                <p className="text-sm">Almacenamiento</p>
                <span className="text-xs">23.5 GB / 1 TB</span>
              </div>
              <div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full
                  w-[23.5%]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between gap-5">
                <p className="text-sm">Banda Mensual</p>
                <span className="text-xs">3.4 TB / 5 TB</span>
              </div>
              <div>
                <div className="w-full bg-indigo-100 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full
                  w-[68%]"
                  />
                </div>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white rounded-full py-1 mt-3">
              Administrar Plan
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
