import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";
import VendorCover from "../images/vendorCover.png";
import VendorResearch from "../images/vendorResearch.png";
import VendorInterviews from "../images/vendorInterviews.png";
import StakeholderResearch from "../images/stakeholderResearch.png";
import PMFlow from "../images/pmflow.png";
import VendorFlow from "../images/vendorflow.png";
import ProgressTracker from "../images/progresstracker.png";
import AddCollaboratorUpdated from "../gif/AddCollaboratorUpdated.mov";
import IndividualRemoval from "../gif/IndividualRemoval.mov";
import AdminRemoval from "../gif/AdminRemoval.mov";
import QuoteCreation from "../gif/QuoteCreation.mov";
import VendorListing from "../gif/VendorListing.mov";
import UserPreferences from "../gif/UserPreferences.mov";
import EditQuote from "../gif/EditQuote.mov";
import ABTesting from "../images/abtesting.png";

import styles from "./VendorContactManagementProject.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function VendorContactManagementProject() {
  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          Vendor Contact Management Project
        </h1>
        <div
          className={`${styles.pageContainer} animate__animated animate__fadeInUp`}
        >
          <div>
            <img
              src={VendorCover}
              alt="Vendor Contact Management Project Cover"
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
                  Optimize the user experience for both vendors and property
                  managers by refining user flows and introducing innovative
                  features.
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
                  The existing platform has limitations, permitting only one
                  person on the vendor side to receive updates on a quote
                  request. Additionally, property managers lack the option to
                  choose a specific individual from the vendor team to
                  collaborate with. This absence of functionality hinders
                  effective collaboration and transparency within organizations.
                  To enhance the platform, consider implementing features that
                  enable multiple recipients for updates and empower property
                  managers to select designated contacts on the vendor side for
                  improved communication and collaboration.
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
                <div>
                  <img
                    src={VendorResearch}
                    alt="Research Process"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  In the absence of a product requirement document and a
                  specific project direction, I took an all encompassing
                  approach throughout the entire process. To gain a
                  comprehensive understanding of the underlying issues, I
                  initiated user research and conducted stakeholder interviews.
                  Leveraging the insights obtained, I formulated project
                  objectives and hypotheses, subsequently ideating user flows
                  and wireframes.
                </p>
                <p>
                  Collaboration with project managers and developers at VendorPM
                  was crucial for making adjustments and developments,
                  particularly in response to technical constraints. With the
                  prototype now launched, the design team is well-positioned to
                  assess the effectiveness of the solution through rigorous
                  testing. This end-to-end involvement ensures a thorough and
                  thoughtful approach to addressing the project's challenges.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Problem for Vendors</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  The primary challenge from the vendor's perspective is the
                  limitation wherein only one person within their organization
                  can receive updates on a quote request. Consequently,
                  employees resort to external communication platforms to
                  inquire about the status of a quote request, hindering
                  internal collaboration. Addressing this issue is pivotal to
                  streamline communication and foster more efficient
                  collaboration within the vendor organization.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Problem for Property Managers</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Property managers currently face a challenge in being unable
                  to designate a specific person from the vendor side to lead
                  their quote request. This lack of assurance hampers the
                  development of strong property manager and vendor
                  relationships, forcing property managers to resort to external
                  communication platforms to request special assistance.
                  Enhancing the platform to enable property managers to select
                  and work directly with a designated contact on the vendor side
                  would significantly improve relationship building and
                  streamline communication.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Problem Validation</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  To substantiate the identified problem, I undertook a
                  comprehensive approach by conducting stakeholder interviews.
                  This allowed me to gain insights into the common pain points
                  experienced by users when interacting with the VendorPM
                  platform. Additionally, I conducted user research to gauge the
                  prevalence and impact of the issue among both vendors and
                  property managers. This combined approach ensured a thorough
                  understanding of the challenges faced by users, laying the
                  groundwork for informed problem solving and solution
                  development.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>User Interviews</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={VendorInterviews}
                    alt="Vendor Interviews"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Interviews with 12 vendors and 7 property managers, all
                  regular users of VendorPM, provided a detailed examination to
                  verify the impact of the identified issue on their
                  experiences. This targeted user feedback is a valuable
                  qualitative source, offering firsthand insights into
                  challenges and validating the severity and scope of the
                  problem.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Stakeholder Research</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={StakeholderResearch}
                    alt="Stakeholder Research"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Interviewing two members from the vendor support team and two
                  members from the customer support team, who regularly engage
                  with users, revealed three key missing aspects on the
                  platform. This valuable input serves as a foundation for
                  refining the platform to address user needs and improve
                  overall usability.
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
                  From gathered insights, two main hypotheses and their expected
                  outcomes were identified:
                </p>
                <ol>
                  <li>
                    Introduce User Hierarchy for Quote Request Management
                    <ul>
                      <li>Foster collaboration and trust</li>
                      <li>
                        Enhance transparency in tracking quote request progress
                      </li>
                    </ul>
                  </li>
                  <li>
                    Implement Collaborators and Primary Contacts Feature
                    <ul>
                      <li>
                        Improve platform accessibility and user satisfaction
                      </li>
                      <li>
                        Boost quote request conversion rates and enhance user
                        retention
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
                <h2>User Flow for Property Managers</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={PMFlow}
                    alt="PM Flow"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Created a streamlined user flow enabling property managers to
                  initiate a quote request, with an added feature allowing them
                  to select a specific vendor employee for collaboration.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>User Flow for Vendors</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={VendorFlow}
                    alt="Vendor Flow"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Constructed the vendor-centric user flow, allowing vendors to
                  accept or decline quote requests. The primary contact,
                  designated by the vendor or chosen by the property manager,
                  gains access. The primary contact can then add collaborators,
                  enabling various vendor team members to receive updates.
                  Vendors navigate quote requests via a progress tracker with
                  metrics for user monitoring. Collaborators can edit requests,
                  fostering accountability and transparency.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Vendor Progress Tracker Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={ProgressTracker}
                    alt="Progress Tracker"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  The progress tracker underwent multiple iterations for
                  enhanced user experience. The initial version featured a
                  kanban board allowing users to drag and drop progress, but
                  testing revealed challenges in comprehension and maintenance.
                  The second iteration offered clearer information but lacked
                  success metrics for improved conversion. The final iteration
                  incorporates key metrics to enhance quote request conversion,
                  presenting essential details for each request and its
                  progress.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Vendor Add Collaborator Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source
                    src={AddCollaboratorUpdated}
                    type="video/mp4"
                  ></source>
                </video>

                <p>
                  The primary vendor contact can seamlessly augment
                  collaboration on a quote request by either selecting existing
                  employees from a dropdown menu or introducing new
                  collaborators to the VendorPM platform.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Vendor Individual Removal Request Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={IndividualRemoval} type="video/mp4"></source>
                </video>

                <p>
                  If a collaborator wishes to remove themselves from a quote
                  request, they can do so seamlessly using the trash icon.
                  However, for a primary contact, a deliberate process is in
                  place: they cannot self remove. Instead, they initiate a
                  removal request to the admin for approval, ensuring a
                  consistent main point of contact for the quote request. To
                  proceed, the primary contact needs to transfer the status to
                  another collaborator before submitting the removal request,
                  adding an extra layer of verification and minimizing the
                  potential for human error.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Vendor Admin Removal Request Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={AdminRemoval} type="video/mp4"></source>
                </video>

                <p>
                  Administrators within the vendor organization possess
                  extensive access capabilities, allowing them to approve
                  removal requests, freely add or delete collaborators from a
                  quote request, and access a comprehensive progress tracker
                  containing all overseen quote requests. Within this workflow,
                  admins can view warning statuses signaling an intent to leave
                  a quote request. Subsequently, admins have the authority to
                  either approve or decline the removal request. In case of a
                  decline, the primary contact is reinstated on the quote
                  request without losing their primary contact status. This
                  meticulous process ensures careful oversight and control over
                  the collaborative dynamics on quote requests.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Property Managers Quote Request Creation Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={QuoteCreation} type="video/mp4"></source>
                </video>

                <p>
                  Property managers enjoy the flexibility to choose their
                  primary contact when submitting a quote request. They can opt
                  for the default contact set by the vendor organization or, for
                  personalized collaboration, select an alternative employee via
                  a dropdown menu. In the event that the desired contact is not
                  listed, property managers have the option to seamlessly add a
                  new vendor employee contact by providing their name and email.
                  The selected vendor employee will then receive a link to
                  create an account on the platform, ensuring swift access to
                  the submitted quote request.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Property Managers Vendor Listing Profile Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={VendorListing} type="video/mp4"></source>
                </video>

                <p>
                  Property managers benefit from the ability to discover a
                  vendor profile on our platform. Within the employee listing
                  feature, property managers can proactively choose their
                  preferred primary contact, streamlining the process even
                  before initiating a quote request. This empowers property
                  managers to consistently create quote requests without the
                  need to reselect their desired vendor employee unless they opt
                  for someone new from the available dropdown options.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Change in Scope</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Despite initial approval of the presented flows, a sudden
                  change in project scope, driven by resource constraints and an
                  accelerated deadline, necessitated the creation of new
                  wireframes within a 2 week timeframe to align with the revised
                  requirements from the product team.
                </p>
                <ol>
                  <li>
                    Email Preferences Options
                    <ul>
                      <li>All emails</li>
                      <li>No emails</li>
                      <li>Only new leads</li>
                    </ul>
                  </li>
                  <li>
                    No User Hierarchy
                    <ul>
                      <li>
                        Each user possesses the ability to modify the email
                        settings of any other user
                      </li>
                      <li>
                        Every member of the vendor team has the authority to
                        edit and access any quote request
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
                <h2>Vendor User Preferences Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={UserPreferences} type="video/mp4"></source>
                </video>
                <p>
                  I collaborated with another designer to overhaul the account
                  settings for vendors. The updated design empowers vendor
                  employees to invite users to VendorPM through their accounts,
                  granting them the ability to edit email preferences for any
                  employee. While concerns about privacy and potential user
                  errors were raised by the design team, the product team saw
                  the convenience that such a feature could offer to users.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Vendor Edit Quote Request Wireframes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                >
                  <source src={EditQuote} type="video/mp4"></source>
                </video>
                <p>
                  In response to the postponed user hierarchy implementation and
                  the expanded user permissions, I proposed a solution to
                  enhance user management and accountability. Recognizing the
                  potential for user errors and conflicting data arising from
                  unrestricted editing, I introduced an Edit Status feature in
                  the header. This displays the employee who last edited the
                  quote request and the corresponding timestamp. By clicking on
                  the status, users can easily identify and review the changes,
                  with the ability to hover over highlighted text to see the
                  original content and identify the user responsible for the
                  modification. This proposal gained approval from both the
                  product and engineering teams for its feasibility and
                  effectiveness in promoting accountability.
                </p>
              </div>
            </div>

            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>AB Testing</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={ABTesting}
                    alt="AB Testing"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Following the AB testing aimed at optimizing the placement of
                  the edit status, I engaged with four stakeholders to assess
                  accessibility. The unanimous preference among all stakeholders
                  was the first iteration, primarily because it is the first
                  element users encounter upon navigating to the quote request
                  overview page. Consequently, the platform now integrates the
                  first iteration, aligning with the collective feedback and
                  prioritizing user visibility.
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
                  This project has been a significant learning experience,
                  providing me with valuable insights into the responsibilities
                  of a UX Designer while working on an established product. I
                  encountered various challenges that allowed me to enhance my
                  skillset and gain a better understanding of the design
                  process.
                </p>
                <p>
                  <strong>Taking Initiative</strong>
                </p>
                <p>
                  I developed a proactive approach throughout this project. With
                  limited user data and no product requirement document
                  initially, I took the initiative to gather insights. I reached
                  out to various members of the organization, actively seeking
                  their contributions and obtaining valuable user feedback to
                  inform the design process.
                </p>
                <p>
                  <strong>Actively Collaborate with Product Managers</strong>
                </p>
                <p>
                  The final stages of the project brought about unexpected
                  shifts in direction, reinforcing the importance of consistent
                  feedback loops with the product team at every design stage.
                  This experience underscored the significance of ensuring
                  alignment and transparency across various departments
                  throughout the design process.
                </p>
                <p>
                  <strong>Being Adaptable</strong>
                </p>
                <p>
                  Adapting to the new scope of the project required a swift
                  overhaul of screens and concepts within a tight two week
                  timeframe. This experience taught me the importance of
                  flexibility in design. While I initially summarized findings
                  and workflows, I had to swiftly shift my design process and
                  implement various wireframes. This valuable lesson emphasized
                  the need to remain adaptable, not getting too attached to
                  specific user flows, and being open to viewing challenges from
                  different perspectives.
                </p>
                <p>
                  <strong>Advocating for Users</strong>
                </p>
                <p>
                  Despite some of my initial screens being deferred to future
                  sprints, I recognized the importance of advocating for users
                  and communicating the insights derived from my user research
                  to the product team. This provided them with an alternative
                  perspective and heightened awareness of existing platform
                  issues. Consequently, the team is now considering the
                  incorporation of the user hierarchy concept in future updates.
                  Additionally, this experience reinforced the importance of
                  confidence in presenting work and raising points aimed at
                  enhancing the user experience through intuitive and feasible
                  features, considering both user and engineering perspectives
                  at VendorPM.
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
