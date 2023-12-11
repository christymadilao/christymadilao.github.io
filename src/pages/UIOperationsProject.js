import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";
import TDCover from "../images/TDCover.png";
import SampleOperation from "../images/SampleOperation.png";
import UserFlowOne from "../images/UserFlowOne.png";
import UserFlowTwo from "../images/UserFlowTwo.png";
import CurrentUI from "../gif/CurrentUI.mov";
import UpdatedUI from "../gif/UpdatedUI.mov";
import BulkUploadAlert from "../images/BulkUploadAlert.png";

import styles from "./UIOperationsProject.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function UIOperationsProject() {
  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          UI Operations Project
        </h1>
        <div
          className={`${styles.pageContainer} animate__animated animate__fadeInUp`}
        >
          <div>
            <img
              src={TDCover}
              alt="TD Cover"
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
                <h2>Company</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  I am currently a UX Engineer of Rakuten SEM platform team,
                  dedicated to supporting the Ichiba Marketing Department with
                  creative management and seamless data sync integrations across
                  Google Ads and Yahoo Ads. Initially brought on board to
                  engineer a user interface, I led the initiative to replace
                  cumbersome manual operations conducted through CSV files and
                  Ngate.
                </p>
              </div>
            </div>
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
                  The Ichiba Marketing Department sought a UI overhaul to
                  streamline the TD operation flow, synchronizing title and
                  description ads across Google and Yahoo for enhanced click
                  through rates. The initial UI iteration lacked the capacity
                  for bulk additions or modifications of title and description
                  templates for specific events, like super sales or marathons,
                  as per their request.
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
                  Streamlining the TD operation flow through a bulk upload
                  feature, offering internal users a unified platform to store
                  all title and description templates for swift modifications
                  using filtering options. Additionally, addressing errors
                  during bulk uploads by allowing users to revisit error files
                  later, ensuring seamless correction without disrupting
                  successful uploads of accurate templates.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Current User Operation</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={SampleOperation}
                    alt="Sample Operation"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Current UI Demo</h2>
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={CurrentUI} type="video/mp4"></source>
                </video>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              ></div>
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
                  The former UI restricted users to adding TD templates
                  individually, misaligning with their workflow of duplicating
                  multiple templates simultaneously. Moreover, users
                  underutilized the TD template draft feature, favouring the
                  reuse of previous TD templates while only modifying essential
                  details like event dates. Additionally, inconsistencies arose
                  in template names due to potential deviations from
                  standardized formats owing to human error. Furthermore, the
                  lack of control over individual headlines and descriptions in
                  Text ads, dictated by the optimization algorithm, restricted
                  users from customizing content for specific events, limiting
                  the enhancement of the shopper ad experience.
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
                <li>
                  Eliminate the requirement for a template name and introduce
                  distinct columns—Account, Campaign, Ad Group, and Suffix
                  Name—to serve as generated notes for specific events, such as
                  a super sale. This modification removes the need for an
                  additional step in mapping TD templates to TD rules, as having
                  separate columns enables automatic handling of this process.
                </li>
                <p></p>
                <li>
                  Replace the TD creation flow and draft feature with a bulk
                  upload process. Users can download existing TD templates from
                  the system, make necessary modifications, and sync them back
                  by uploading the file. The download file will include an
                  Action column where users specify their desired action—add,
                  update, or delete—for each template. This simplifies template
                  management and enables quick, systematic updates to the
                  system.
                </li>
                <p></p>
                <li>
                  Establish a centralized location to store error files
                  resulting from failed TD template uploads. Successful uploads
                  remain unaffected. Users have a one month window to access and
                  rectify these error files, allowing them to reupload modified
                  TD templates based on the error messages at their convenience.
                  This ensures a streamlined process for internal users to
                  address upload issues efficiently.
                </li>
                <p></p>
                <li>
                  Enabling users to define headline and description positions
                  during bulk upload enhances control over content placement.
                  Incorporating a pin tag in the UI to display position numbers
                  adds valuable information, empowering users with greater
                  clarity and control over content arrangement.
                </li>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Updated User Flow</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  The streamlined TD operation process comprises two main parts:
                </p>
                <div>
                  <img
                    src={UserFlowOne}
                    alt="User Flow One"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  1. Filtering and Downloading TD Templates: Users access the TD
                  Template page to filter templates synced on Google or Yahoo.
                  They can apply multiple filters for Account, Campaign, Suffix
                  Name, and Status, while other fields permit single filter
                  applications due to their lengthy content. Fixed columns
                  Account, Campaign, Suffix Name, and Status and variable
                  columns headline1, headline2, description1, path1, finalUrl
                  are provided. To view additional fields, users can utilize the
                  column button to toggle the visibility of variable fields,
                  enabling efficient template filtering.
                </p>

                <div>
                  <img
                    src={UserFlowTwo}
                    alt="User Flow Two"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  2. Bulk Upload of Modified File: After modifying the
                  downloaded CSV file, users proceed with bulk upload. The
                  system generates a bulk upload alert summarizing the number of
                  added, updated, deleted, or errored TD templates. Error
                  handling involves easy access to error files via the Summary
                  page error tab. The system automatically removes error files
                  after a month to manage data storage effectively.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Prototype</h2>
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={UpdatedUI} type="video/mp4"></source>
                </video>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              ></div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Bulk Upload Alert</h2>
              </div>
              <div>
                <img
                  src={BulkUploadAlert}
                  alt="Bulk Upload Alert"
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                />
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Success Metrics</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  The streamlined TD operation flow boasted a 100 percent user
                  adoption rate. This overhaul dramatically optimized user
                  efficiency, reducing the time commitment from four hours per
                  month to a mere one hour per month.
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
                  As the UX designer and front end developer for this project, I
                  prioritized stakeholder involvement through consistent user
                  interviews and usability testing sessions. This collaborative
                  approach aimed to refine workflows, emphasizing simplicity and
                  reducing the need for extensive user training.
                </p>
                <p>
                  I advocated for the utilization of Rakuten ReX Design system
                  to enhance the visual layout of the UI, ensuring adherence to
                  established design standards. Regular collaboration with the
                  design systems team facilitated a cohesive and familiar
                  interface, enhancing user experience.
                </p>
                <p>
                  Internally, maintaining frequent development meetings with
                  backend developers and product managers was crucial. These
                  sessions aimed to align expectations, clarify requirements,
                  and address any misconceptions, fostering a unified
                  understanding among the team.
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
