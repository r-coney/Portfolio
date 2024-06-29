"use client";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Decoration from "../Decoration";

type PcDecorationProps = {
  childrenList: React.JSX.Element[];
};

const PcDecoration = ({ childrenList }: PcDecorationProps) => {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile && <Decoration />}
      <div className="container_with_decoration">
        {childrenList.map((children, index) => {
          return (
            <div
              key={index}
              className="section_container section_container_with_decoration section_container_height_auto"
            >
              {children}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PcDecoration;
