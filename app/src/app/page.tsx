import Top from "@/components/Top/Top";
import Skills from "@/components/Top/Skills";
import Works from "@/components/Works/Works";
import Profile from "@/components/Profile/Profile";

export default function Home() {
  return (
    <>
      <div className="section_container">
        <Top />
      </div>
      <div className="section_container">
        <Skills />
      </div>
      <div className="section_container">
        <Works />
      </div>
      <div className="section_container">
        <Profile />
      </div>
    </>
  );
}
