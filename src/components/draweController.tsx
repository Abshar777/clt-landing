"use client"
import { useDrawerStore } from "@/store/index.store";
import React, { useEffect } from "react";

const DraweController = () => {
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  useEffect(() => {
    // Automatically trigger the popup after 10 seconds
    const timer = setTimeout(() => {
      openDrawer();
    }, 10000);

    return () => clearTimeout(timer);
  }, [openDrawer]);
  return <div></div>;
};

export default DraweController;
