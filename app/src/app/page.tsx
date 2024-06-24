import Top from "@/components/Top/Top";
import Skills from "@/components/Top/Skills";
import Works from "@/components/Works/Works";
import Profile from "@/components/Profile/Profile";
import Contact from "@/components/Contact/Contact";
import Decoration from "@/components/Decoration/Decoration";

export default function Home() {
  return (
    <>
      <div className="section_container section_container_top">
        <Top />
      </div>
      <div className="section_container section_container_skills">
        <Skills />
      </div>
      <div className="container_to_split_screen">
        <Decoration />
        <div className="container_with_decoration">
          <div className="section_container section_container_with_decoration">
            <Works />
          </div>
          <div className="section_container section_container_with_decoration">
            <Profile />
          </div>
          <div className="section_container section_container_with_decoration">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
