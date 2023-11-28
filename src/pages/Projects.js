import { Card, Col, Row, Layout } from "antd";
import { Link } from "react-router-dom";
import DogGooo from "../images/DogGooo.png";
import DoughBros from "../images/DoughBros.png";
import Mentoree from "../images/Mentoree.png";
import Rakuten_UI from "../images/Rakuten_UI.png";
import VendorPM_Draft from "../images/VendorPM_Draft.png";
import VendorPM_Vendor from "../images/VendorPM_Vendor.png";
import PersonalLinks from "../components/PersonalLinks";
import styles from "./Projects.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function Projects() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          Projects
        </h1>
        <Row
          gutter={[24, 24]}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 250px)",
          }}
          className="animate__animated animate__slideInUp"
        >
          <Col>
            <Link to="/uioperationsproject">
              <Card
                hoverable
                style={{
                  backgroundColor: "#FFC3BD",
                  border: "none",
                  width: "600px",
                  height: "400px",
                }}
              >
                <div className={styles.container}>
                  <div>
                    <img src={Rakuten_UI} alt="Rakuten" />
                  </div>
                  <div>
                    <h1 className={styles.projectTitle}>
                      UI Operations Project
                    </h1>
                    <p className={styles.projectDescription}>
                      work in progress...
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/doggooo">
              <Card
                hoverable
                style={{
                  backgroundColor: "#A0B2E8",
                  border: "none",
                  width: "600px",
                  height: "400px",
                }}
              >
                <div className={styles.phoneContainer}>
                  <div>
                    <img
                      src={DogGooo}
                      alt="DogGooo"
                      style={{ marginLeft: "50px" }}
                    />
                  </div>
                  <div style={{ paddingTop: "60px" }}>
                    <h1 className={styles.projectTitle}>DogGooo</h1>
                    <p className={styles.projectDescription}>
                      An app for dog owners
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/quoterequestdraftproject">
              <Card
                hoverable
                style={{
                  backgroundColor: "#D8EBEB",
                  border: "none",
                  width: "600px",
                  height: "400px",
                }}
              >
                <div className={styles.container}>
                  <div>
                    <img src={VendorPM_Draft} alt="VendorPM_Draft" />
                  </div>
                  <div>
                    <h1 className={styles.projectTitle}>
                      Quote Request Draft Project
                    </h1>
                    <p className={styles.projectDescription}>
                      Improve user satisfaction by introducing draft feature
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/vendorcontactmanagementproject">
              <Card
                hoverable
                style={{
                  backgroundColor: "#E8B9A0",
                  border: "none",
                  width: "600px",
                  height: "400px",
                }}
              >
                <div className={styles.container}>
                  <div>
                    <img src={VendorPM_Vendor} alt="VendorPM_Vendor" />
                  </div>
                  <div>
                    <h1 className={styles.projectTitle}>
                      Vendor Contact Management Project
                    </h1>
                    <p className={styles.projectDescription}>
                      Connecting Property Managers and Vendors
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/doughbros">
              <Card
                hoverable
                style={{
                  backgroundColor: "#FEE4BD",
                  // backgroundColor: "#EFDD8D",
                  border: "none",
                  width: "600px",
                  height: "400px",
                }}
              >
                <div className={styles.phoneContainer}>
                  <div>
                    <img
                      src={DoughBros}
                      alt="DoughBros"
                      style={{ marginLeft: "50px" }}
                    />
                  </div>
                  <div style={{ paddingTop: "60px" }}>
                    <h1 className={styles.projectTitle}>Dough Bros</h1>
                    <p className={styles.projectDescription}>
                      An effective way to split payments
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to="/mentoree">
              <Card
                hoverable
                style={{
                  backgroundColor: "#C8ECA4",
                  border: "none",
                  width: "600px",
                  height: "400px",
                }}
              >
                <div className={styles.container}>
                  <div>
                    <img src={Mentoree} alt="Mentoree" />
                  </div>
                  <div>
                    <h1 className={styles.projectTitle}>Mentoree</h1>
                    <p className={styles.projectDescription}>
                      To connect with professionals in the tech industry
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </Content>
      <Footer className={styles.footer}>
        <PersonalLinks />
      </Footer>
    </Layout>
  );
}
