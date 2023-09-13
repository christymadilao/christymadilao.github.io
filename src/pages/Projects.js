import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import DogGooo from "../images/DogGooo.png";
import DoughBros from "../images/DoughBros.png";
import Mentoree from "../images/Mentoree.png";
import Rakuten_UI from "../images/Rakuten_UI.png";
import VendorPM_Draft from "../images/VendorPM_Draft.png";
import VendorPM_Vendor from "../images/VendorPM_Vendor.png";

import "animate.css";

export default function Projects() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#454545",
          fontFamily: "ApparelBlack",
        }}
        className="animate__animated animate__fadeInUp"
      >
        Projects
      </h1>
      <Row
        gutter={[24, 24]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="animate__animated animate__slideInUp"
      >
        <Col>
          <Link>
            <Card
              hoverable
              style={{
                backgroundColor: "#FFC3BD",
                border: "none",
                width: "500px",
                height: "350px",
              }}
            >
              <div>
                <div>
                  <img src={Rakuten_UI} alt="Rakuten" />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link>
            <Card
              hoverable
              style={{
                backgroundColor: "#A0B2E8",
                border: "none",
                width: "500px",
                height: "350px",
              }}
            >
              <div>
                <div>
                  <img src={DogGooo} alt="DogGooo" />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link>
            <Card
              hoverable
              style={{
                backgroundColor: "#D8EBEB",
                border: "none",
                width: "500px",
                height: "350px",
              }}
            >
              <div>
                <div>
                  <img src={VendorPM_Draft} alt="VendorPM_Draft" />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link>
            <Card
              hoverable
              style={{
                backgroundColor: "#E8B9A0",
                border: "none",
                width: "500px",
                height: "350px",
              }}
            >
              <div>
                <div>
                  <img src={VendorPM_Vendor} alt="VendorPM_Vendor" />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link>
            <Card
              hoverable
              style={{
                backgroundColor: "#FEE4BD",
                border: "none",
                width: "500px",
                height: "350px",
              }}
            >
              <div>
                <div>
                  <img src={DoughBros} alt="DoughBros" />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link>
            <Card
              hoverable
              style={{
                backgroundColor: "#C8ECA4",
                border: "none",
                width: "500px",
                height: "350px",
              }}
            >
              <div>
                <div>
                  <img src={Mentoree} alt="Mentoree" />
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
