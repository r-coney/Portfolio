import Top from "@/components/Top/Top";
import Skills from "@/components/Top/Skills";
import Works from "@/components/Works/Works";
import Profile from "@/components/Profile/Profile";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <div className="section_container" id="top">
        <Top />
      </div>
      <div className="section_container" id="skills">
        <Skills />
      </div>
      <div className="section_container" id="works">
        <Works />
      </div>
      <div className="section_container" id="profile">
        <Profile />
      </div>
      <div className="section_container" id="contact">
        <Contact />
      </div>
    </>
  );
}
