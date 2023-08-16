import AboutCard from "../components/AboutCard";
import GraphicLeft from "../components/GraphicLeft";
import GraphicRight from "../components/GraphicRight";
import "animate.css";

export default function About() {
  return (
    <div>
      <GraphicLeft />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
        className="animate__animated animate__fadeInUp"
      >
        <AboutCard />
      </div>
      <GraphicRight />
    </div>
  );
}
