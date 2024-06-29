"use client";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Decoration from "../Decoration";

const MobileDecoration = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="section_container">
      <Decoration />
    </div>
  );
};

export default MobileDecoration;
