import { Card, Col, Row, Layout, Space, Tag } from "antd";
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
                      Revamp TD creation with distinct columns, bulk upload, and
                      error management.
                    </p>
                    <div>
                      <Space size={[0, 8]} wrap>
                        <Tag color="magenta">React Development</Tag>
                        <Tag color="magenta">Stakeholder Interview</Tag>
                        <Tag color="magenta">UI/UX</Tag>
                        <Tag color="magenta">UX Research</Tag>
                      </Space>
                    </div>
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
                      Design iOS app to seamlessly discover and explore pet
                      friendly destinations.
                    </p>
                    <div>
                      <Space size={[0, 8]} wrap>
                        <Tag color="purple">Product Design</Tag>
                        <Tag color="purple">UI/UX</Tag>
                      </Space>
                    </div>
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
                      Enhance user experience with autosave and organized draft
                      management.
                    </p>
                    <div>
                      <Space size={[0, 8]} wrap>
                        <Tag color="cyan">Stakeholder Interview</Tag>
                        <Tag color="cyan">UI/UX</Tag>
                      </Space>
                    </div>
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
                      Enhance accountability with user hierarchy, permissions,
                      and editable status feature.
                    </p>
                    <div>
                      <Space size={[0, 8]} wrap>
                        <Tag color="volcano">Product Design</Tag>
                        <Tag color="volcano">UI/UX</Tag>
                      </Space>
                    </div>
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
                      Develop app for seamless expense splitting, storage, and
                      accountability tracking.
                    </p>
                    <div>
                      <Space size={[0, 8]} wrap>
                        <Tag color="gold">Product Design</Tag>
                        <Tag color="gold">UI/UX</Tag>
                      </Space>
                    </div>
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
                      Crafting intuitive web app connecting aspiring individuals
                      with tech mentors.
                    </p>
                    <div>
                      <Space size={[0, 8]} wrap>
                        <Tag color="green">Design</Tag>
                        <Tag color="green">UI</Tag>
                      </Space>
                    </div>
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
