import "animate.css";

function GraphicLeft() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0 }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="animate__animated animate__rotateInDownLeft"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#D8EBEB",
          }}
        />
        <div
          className="animate__animated animate__rotateInDownRight"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "0px 0px 100px 0px",
            backgroundColor: "#FFC3BD",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="animate__animated animate__rotateInUpLeft"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#A0B2E8",
          }}
        />
        <div
          className="animate__animated animate__rotateInUpRight"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "0px 100px 0px 0px",
            backgroundColor: "#C8ECA4",
          }}
        />
      </div>
    </div>
  );
}

export default GraphicLeft;
