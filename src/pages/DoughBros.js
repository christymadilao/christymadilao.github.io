import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";
import DoughBrosCover from "../images/DoughBrosCover.png";
import DoughBrosResearchProcess from "../images/DoughBrosResearchProcess.png";
import DoughBrosResearchProcessTwo from "../images/DoughBrosResearchProcessTwo.png";
import DoughBrosResearchProcessThree from "../images/DoughBrosResearchProcessThree.png";
import DoughBroUserFlows from "../images/DoughBroUserFlows.png";
import DoughBrosLowFi from "../images/DoughBrosLowFi.png";
import DoughBrosMidFi1 from "../images/DoughBrosMidFi1.png";
import DoughBrosMidFi2 from "../images/DoughBrosMidFi2.png";
import DoughBrosMidFi3 from "../images/DoughBrosMidFi3.png";
import DoughBrosMidFi4 from "../images/DoughBrosMidFi4.png";
import DoughBrosMidFi5 from "../images/DoughBrosMidFi5.png";
import DoughBrosMidFi6 from "../images/DoughBrosMidFi6.png";
import DoughBrosHiFi1 from "../images/DoughBrosHiFi1.png";
import DoughBrosHiFi2 from "../images/DoughBrosHiFi2.png";
import DoughBrosHiFi3 from "../images/DoughBrosHiFi3.png";
import DoughBrosHiFi4 from "../images/DoughBrosHiFi4.png";
import DoughBrosHiFi5 from "../images/DoughBrosHiFi5.png";
import futuresteps1 from "../images/futuresteps1.png";
import futuresteps2 from "../images/futuresteps2.png";

import styles from "./DoughBros.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function DoughBros() {
  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          DoughBros
        </h1>
        <div
          className={`${styles.pageContainer} animate__animated animate__fadeInUp`}
        >
          <div>
            <img
              src={DoughBrosCover}
              alt="DoughBros Cover"
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
                  Dough Bros is a financial tooling app designed to offer users
                  a more convenient and effective way to split payments, send
                  payment reminders, and track financial activities. One
                  standout feature is that not all friends in a group need to
                  download the app. Instead, there is a separate React page
                  allowing friends to notify the user of their payment. The app
                  addresses the common issue of awkward conversations around
                  payments by automatically sending payment reminders via
                  Messenger or Email, ensuring seamless and hassle free
                  financial transactions among friends.
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
                  The primary objective was to develop an app facilitating the
                  seamless splitting of expenses among friends while serving as
                  a comprehensive storage solution for all financial
                  transactions.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Project Idea</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Dough Bros is a mobile application designed to simplify the
                  process of dividing expenses among users, promoting
                  accountability for outstanding balances. Our app ensures a
                  convenient and streamlined experience for users, making the
                  process of managing shared expenses easy and efficient.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Research Process</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DoughBrosResearchProcess}
                    alt="DoughBros Research Process"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosResearchProcessTwo}
                    alt="DoughBros Research Process Two"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosResearchProcessThree}
                    alt="DoughBros Research Process Threee"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  We conducted surveys and in person interviews, engaging with
                  thirteen survey respondents and four interviewees, to gain
                  insights into the functionalities users desire in a financial
                  tooling application. Our research revealed that users commonly
                  use such applications when dining out or making group
                  purchases. The primary challenge faced by users was reminding
                  friends to repay and keeping track of group expenses. To
                  address these issues, our solution includes a homepage
                  displaying all group purchases, indicating the total amount
                  owed or expected from the group. Additionally, we introduced a
                  Friends panel summarizing the outstanding payments of each
                  friend.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>User Flows</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DoughBroUserFlows}
                    alt="DoughBros User Flows"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  The app features two user roles: User One, who creates the
                  group and has the app, and User Two, invited to the group
                  without the app. For the MVP, assuming both users have the app
                  downloaded. The primary functionalities include creating a
                  group, inviting individuals from the messenger contact list,
                  and settling debts within the app. This design ensures a user
                  friendly experience for both group creators and invitees,
                  streamlining the process of expense management and settlement.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Low Fidelity Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DoughBrosLowFi}
                    alt="DoughBros Low Fi"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  For our MVP, we focused on the essential features of group
                  creation and settling debts. We iteratively sketched various
                  designs to refine and enhance the user experience, ensuring
                  that the core functionalities are intuitive and user friendly.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Mid Fidelity Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DoughBrosMidFi1}
                    alt="DoughBrosMidFi1"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosMidFi2}
                    alt="DoughBrosMidFi2"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosMidFi3}
                    alt="DoughBrosMidFi3"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosMidFi4}
                    alt="DoughBrosMidFi4"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosMidFi5}
                    alt="DoughBrosMidFi5"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosMidFi6}
                    alt="DoughBrosMidFi6"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Following extensive user testing and validation of our low fi
                  wireframes, we made crucial refinements to the expense
                  splitting variations. We streamlined the process to include
                  two options: Split Equally, where the user inputs the total
                  amount and the app automatically divides it equally among the
                  group, and Input Custom Amount, which allows users to specify
                  individual amounts for each member, with the app displaying
                  the total. This modification was implemented to enhance user
                  flow and simplify the overall experience.
                </p>
                <p>
                  Initially, we granted users who did not create the group
                  expense equal access control to the user who initiated the
                  expense. However, we recognized potential complications and
                  the risk of inaccurate data entry. Consequently, we decided to
                  remove the Add Expense button for other users, restricting
                  their functionality to settling the debts they owe. This
                  adjustment was made to ensure more accurate and controlled
                  data management within the app.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Hi Fidelity Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DoughBrosHiFi1}
                    alt="DogGooo Hi Fi 1"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosHiFi2}
                    alt="DogGooo Hi Fi 2"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosHiFi3}
                    alt="DogGooo Hi Fi 3"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosHiFi4}
                    alt="DogGooo Hi Fi 4"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DoughBrosHiFi5}
                    alt="DogGooo Hi Fi 5"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  We developed a UI library that showcases our primary color
                  scheme and selected fonts. Opting for a vibrant color palette,
                  we aimed to appeal to our primary target audience, the younger
                  demographic.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Future Steps</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={futuresteps1}
                    alt="Dough Bros Future Steps 1"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={futuresteps2}
                    alt="Dough Bros Future Steps 2"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  In our upcoming phases, we plan to enhance the user experience
                  by incorporating features such as twenty four hour stories
                  within the Friend Totals feed on the home page. These stories
                  will confirm the amounts each friend sent. Furthermore, we are
                  working on deploying a dedicated React page. This page will
                  allow invited users to settle debts directly without the need
                  to download the app.
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
                  At the beginning, we encountered challenges in working with
                  cross functional teams. However, we successfully overcame
                  these hurdles by fostering active collaboration. We
                  intentionally included developers in our design meetings,
                  gaining deeper insights into the implementation process and
                  finding ways to optimize our designs. This collaborative
                  effort allowed us to work effectively as a team. During this
                  journey, I partnered with another product designer, creating a
                  dynamic environment where we could exchange ideas and learn
                  from each other.
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
