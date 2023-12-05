import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";

import MentoreeLandingPage from "../images/MentoreeLandingPage.png";
import MentoreeFeatures from "../images/MentoreeFeatures.png";
import MentoreeSearch from "../images/MentoreeSearch.png";
import MentoreeFooter from "../images/MentoreeFooter.png";
import MentoreeChat from "../images/MentoreeChat.png";
import MentoreeCalendar from "../images/MentoreeCalendar.png";
import MentoreeForum from "../images/MentoreeForum.png";

import styles from "./DoughBros.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function Mentoree() {
  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          Mentoree
        </h1>
        <div
          className={`${styles.pageContainer} animate__animated animate__fadeInUp`}
        >
          <div>
            <img
              src={MentoreeLandingPage}
              alt="Mentoree Cover"
              className={`${styles.cover} animate__animated animate__fadeInUp`}
            />
          </div>
          <div
            className={`${styles.contentContainer} animate__animated animate__fadeInUp`}
          >
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Background</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Mentoree is a revolutionary application designed to connect
                  tech enthusiasts with experienced mentors in the industry.
                  Catering to those embarking on their tech careers, this
                  platform offers a plethora of features aimed at fostering
                  growth for all participants. In addition to facilitating
                  mentee mentor connections, Mentoree uniquely allows mentors to
                  seek mentorship themselves if they wish to further enhance
                  their professional journey.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Project Goal</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Our primary objective was to craft a user friendly web
                  application dedicated to assisting individuals in
                  transitioning or pursuing a career in the tech industry. By
                  providing a platform for connecting with mentors in the field,
                  our goal is to empower users on their journey to success.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>The Problem</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  While existing platforms like LinkedIn enable individuals to
                  connect with working professionals for mentorship, they lack
                  the capability to facilitate direct pairing of mentees with
                  suitable mentors. Our Mentoree application aims to bridge this
                  gap by offering a seamless and personalized mentorship
                  experience.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>The Solution</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Due to the time constraints of the hackathon, cmd f,
                  conducting extensive user research and testing posed
                  challenges. Consequently, we initially identified the key
                  features of the web app:
                </p>
                <ul>
                  <li>One on one chats</li>
                  <li>Anonymous forum</li>
                  <li>Specialized searches for mentor mentee pairing</li>
                  <li>
                    A calendar that showcases exclusive community meetups and
                    events
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Prototype</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={MentoreeLandingPage}
                    alt="Mentoree Landing Page"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={MentoreeFeatures}
                    alt="Mentoree Features"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={MentoreeSearch}
                    alt="Mentoree Search"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={MentoreeFooter}
                    alt="Mentoree Footer"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={MentoreeChat}
                    alt="Mentoree Chat"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={MentoreeCalendar}
                    alt="Mentoree Calendar"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={MentoreeForum}
                    alt="Mentoree Forum"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Mentoree offers a diverse set of features catering to both
                  individual users and companies. User profiles, created during
                  the sign up process, serve as a personalized hub for mentor
                  searches. Our platform simplifies the mentor finding process
                  by allowing users to filter through potential mentors based on
                  career, experience, and industry. Once a suitable mentor is
                  identified, users can engage in one on one chats to seek
                  advice or schedule meetings. For companies, Mentoree fosters a
                  sense of interconnectedness, particularly beneficial for large
                  organizations and new hires.
                </p>
                <p>
                  The calendar feature provides a dedicated space for scheduling
                  meetings and staying informed about local tech meetups and
                  events. The blog post functionality enables mentors or
                  companies to share insights through articles. The forum allows
                  users to pose questions, with both mentors and mentees
                  contributing valuable responses, covering topics such as
                  learning resources and interview tips.
                </p>
                <p>
                  While we had ambitious plans, certain features like
                  integrating with the LinkedIn API for streamlined profiles and
                  creating a comprehensive database were not implemented within
                  the given time constraints.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Learning Outcomes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Embarking on this project was a valuable learning experience
                  that deepened my understanding of UX design and kindled a
                  greater passion for the field. The collaborative nature of the
                  project enabled me to absorb knowledge and acquire new skills
                  from my teammates. Effectively using Figma, a tool I had
                  limited experience with before, broadened my design toolkit.
                </p>
                <p>
                  Navigating the challenge of creating comprehensive wireframes
                  within a tight twenty four hour timeframe taught me valuable
                  lessons in time management and task prioritization. Overall,
                  this project not only contributed to my growth as a designer
                  but also fueled my enthusiasm to explore further in the realm
                  of design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer className={styles.footer}>
        <PersonalLinks />
      </Footer>
    </Layout>
  );
}
