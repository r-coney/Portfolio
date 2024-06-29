import React from "react";
import Top from "@/components/Top/Top";
import Skills from "@/components/Skills/Skills";
import Works from "@/components/Works/Works";
import Profile from "@/components/Profile/Profile";
import PcDecoration from "@/components/Decoration/PcDecoration/PcDecoration";
import MobileDecoration from "@/components/Decoration/MobileDecoration/MobileDecoration";

export default function Home() {
  return (
    <div className="body_container">
      <div className="section_container section_container_top">
        <Top />
      </div>
      <div className="section_container section_container_height_auto">
        <Skills />
      </div>
      <div className="container_to_split_screen">
        <PcDecoration childrenList={[<Works />, <Profile />]} />
      </div>
      <MobileDecoration />
    </div>
  );
}
