import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";
import QuoteRequestDraftCover from "../images/QuoteRequestDraftCover.png";
import QuoteRequestDraftComponents from "../images/QuoteRequestDraftComponents.png";
import SavedToDrafts from "../images/SavedToDrafts.png";
import Saving from "../images/Saving.png";
import ErrorInSaving from "../images/ErrorInSaving.png";
import DraftTab from "../images/DraftTab.png";

import styles from "./QuoteRequestDraftProject.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function QuoteRequestDraftProject() {
  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          Quote Request Draft Project
        </h1>
        <div
          className={`${styles.pageContainer} animate__animated animate__fadeInUp`}
        >
          <div>
            <img
              src={QuoteRequestDraftCover}
              alt="Quote Request Draft Cover"
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
                  As a Product Design Intern at VendorPM, I applied my design
                  skills to enhance the platform. Throughout my internship, I
                  led the development of key features and revamps, including
                  Service Planner, Vendor Contact Management, Properties, User
                  Preferences, Chat, and marketing materials.
                </p>
                <p>
                  VendorPM connects property managers with reputable vendors
                  through an enterprise platform. Our web application
                  streamlines the process for property managers to request
                  quotes and plan services. On the vendor side, users can submit
                  quotes and express interest in jobs, fostering increased
                  business and profile accessibility.
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
                  Offer users the convenience of saving unfinished quote
                  requests as drafts, allowing them to complete them at their
                  convenience.
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
                  Users currently face frustration as exiting the page leads to
                  the loss of all inputted information in quote requests,
                  necessitating a redo before submission. Improving this aspect
                  is crucial for enhancing user satisfaction.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Objectives</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Following collaborative efforts with the developer team and
                  project managers at VendorPM, the product team has outlined
                  specific objectives for this project:
                </p>
                <ol>
                  <li>
                    Implement Autosave for Drafts
                    <ul>
                      <li>
                        Introduce an autosave feature that ensures quote
                        requests are automatically saved if a user has entered a
                        title, minimizing the risk of data loss.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Draft Carousel and Tab Functionality
                    <ul>
                      <li>
                        Enhance user accessibility to drafts through a carousel
                        format on the marketplace.
                      </li>
                      <li>
                        Implement a dedicated Drafts tab on the manage quotes
                        page, offering users a centralized and convenient way to
                        locate and resume working on their draft submissions.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Components</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={QuoteRequestDraftComponents}
                    alt="Quote Request Draft Components"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Taking the wireframes to the high fidelity stage, my
                  responsibility involved creating components for the user flow
                  of drafting quote requests. This encompassed developing
                  components to display the draft status on the top header,
                  designing cards to showcase draft information, implementing a
                  tab system that includes submitted quote requests and drafts,
                  and creating cards to guide users in inputting relevant
                  information.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Quote Request Draft Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={SavedToDrafts}
                    alt="Saved To Drafts"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={Saving}
                    alt="Saving"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={ErrorInSaving}
                    alt="Error In Saving"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Drafts are now seamlessly preserved through an automatic save
                  feature, requiring only the input of a title. Users are
                  relieved of the manual save task, and these drafts are readily
                  accessible on both the manage quotes and marketplace pages.
                  The status of draft saving is prominently displayed on the top
                  header, indicating the date and time of the last update for
                  user reference. This streamlined process ensures convenience
                  and accessibility in managing and retrieving draft quote
                  requests.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Accessing Drafts Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={QuoteRequestDraftCover}
                    alt="Quote Request Draft Main Screen"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <div>
                  <img
                    src={DraftTab}
                    alt="Draft Tab Screen"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Users can effortlessly access their drafts within the
                  marketplace page, presented in a user friendly carousel view.
                  This intuitive design allows users the option to seamlessly
                  scroll through the carousel or choose to click on View All,
                  redirecting them to a list view within the manage quotes page.
                  The drafts seamlessly integrate into the existing page,
                  coexisting with active quote requests through an efficient tab
                  system. Each draft is visually represented by cards that
                  display pertinent details, providing users with a clear and
                  organized overview of their draft quote requests.
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
                  While this project remains in progress and is yet to be fully
                  integrated into the current platform, my active collaboration
                  with project managers has been instrumental. Obtaining clear
                  objectives and conducting user research enabled me to craft
                  wireframes that are intuitive, requiring minimal adaptation
                  from the perspective of the user.
                </p>
                <p>
                  Throughout this internship, I have embraced challenges as a
                  product designer, collaborating effectively with various
                  departments. Spearheading projects and contributing to the
                  development of new features have been particularly enriching
                  experiences. This journey has facilitated my growth as a
                  product designer, emphasizing the significance of
                  communication skills and adaptability to new design software.
                </p>
                <p>
                  Working at VendorPM has been a transformative experience,
                  bolstering my confidence as a designer and helping me overcome
                  imposter syndrome. I am eager to continue my trajectory as a
                  product designer, leveraging the valuable insights and skills
                  gained during my tenure at VendorPM.
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
