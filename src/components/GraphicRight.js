import "animate.css";

function GraphicRight() {
  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="animate__animated animate__rotateInDownLeft"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#A0B2E8",
            borderRadius: "0px 0px 0px 100px",
          }}
        />
        <div
          className="animate__animated animate__rotateInDownRight"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
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
            borderRadius: "100px 0px 0px 0px",
            backgroundColor: "#C8ECA4",
          }}
        />
        <div
          className="animate__animated animate__rotateInUpRight"
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#D8EBEB",
          }}
        />
      </div>
    </div>
  );
}

export default GraphicRight;
