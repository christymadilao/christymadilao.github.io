import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";
import DogGoooCover from "../images/DogGoooCover.png";
import DogGoooWireframes from "../gif/DogGoooWireframes.mov";
import DogGoooResearchResults from "../images/DogGoooResearchResults.png";
import DogGoooPersona from "../images/DogGoooPersona.png";
import DogGoooInformationArchitecture from "../images/DogGoooInformationArchitecture.png";
import DogGoooInitialSketch from "../images/DogGoooInitialSketch.png";
import DogGoooPrototype from "../images/DogGoooPrototype.png";

import styles from "./DogGooo.module.css";

import "animate.css";

const { Content, Footer } = Layout;

export default function DogGooo() {
  return (
    <Layout>
      <Content style={{ backgroundColor: "white" }}>
        <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
          DogGooo
        </h1>
        <div
          className={`${styles.pageContainer} animate__animated animate__fadeInUp`}
        >
          <div>
            <img
              src={DogGoooCover}
              alt="DogGooo Cover"
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
                  DogGooo is a mobile app designed for dog owners seeking pet
                  friendly locations in their vicinity. The app not only
                  facilitates easy discovery of dog friendly places but also
                  provides user reviews, offering insights into the experiences
                  at each store. With built in navigation, users can seamlessly
                  plan trips, ensuring a hassle free and enjoyable experience
                  for both them and their furry companions.
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
                  Architect, design, and conduct comprehensive research for an
                  iOS app tailored to empower users in discovering pet friendly
                  destinations. Whether searching for a specific location or
                  applying intuitive filters, the app ensures a seamless
                  experience for users looking to explore with their beloved
                  furry companions.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Value Proposition</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <ul>
                  <li>
                    The app brings convenience to users seeking pet friendly
                    outings by addressing the common challenge of stores not
                    clearly indicating their pet friendliness online
                  </li>
                  <li>
                    It empowers users to effortlessly discover new dog friendly
                    destinations that align with their lifestyle and interests
                  </li>
                  <li>
                    It motivates users to frequently enjoy outdoor activities
                    with their dogs, alleviating any feelings of guilt or worry
                    about leaving them at home.
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
                <h2>Research Goals</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <ul>
                  <li>
                    I aimed to comprehend the methods of users for discovering
                    dog friendly places and their approach to researching them
                  </li>
                  <li>
                    Obtain insights into the specific places users desire to
                    bring their dogs
                  </li>
                  <li>
                    Understand the frequency with which users include their dogs
                    in outdoor and daily activities
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
                <h2>Research Process</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  I conducted in depth interviews with 12 participants and
                  distributed questionnaires via Instagram as part of my user
                  research process.
                </p>
                <p>The following questions were asked:</p>
                <ul>
                  <li>What is your name?</li>
                  <li>Tell me about your dog.</li>
                  <li>Describe your daily routine with your dog.</li>
                  <li>
                    Tell me about the last time you brought your dog outside.
                  </li>
                  <li>Where do you usually go to spend time with your dog?</li>
                  <li>
                    How do you find dog friendly places to bring your dog to?
                  </li>
                  <li>
                    What is your planning process when you want to bring your
                    dog out?
                  </li>
                  <li>
                    If you knew in advance which places were dog-friendly, where
                    would you bring your dog?
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
                <h2>Research Results</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DogGoooResearchResults}
                    alt="DogGooo Research Results"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  I utilized Miro for mapping and organizing my research
                  findings, enhancing the categorization process.
                </p>
                <p>The following user insights were derived:</p>
                <ul>
                  <li>
                    Discovered that users frequently desire to bring their dogs
                    to everyday locations, including restaurants, malls,
                    boutiques, and bakeries
                  </li>
                  <li>
                    Found that users prefer not to leave their dogs alone,
                    shaping their daily routines to accommodate their furry
                    companions
                  </li>
                  <li>
                    Users seek pet friendly recommendations on platforms like
                    Yelp, Instagram, and Google but face challenges due to the
                    difficulty and time consuming nature of the process,
                    compounded by less than perfect accuracy in the information
                    provided
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
                <h2>Persona</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DogGoooPersona}
                    alt="DogGooo Persona"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  Following a thorough analysis of my research, I crafted the
                  persona Grace Low. Recently adopting a puppy, Grace aims to
                  spend quality time with her furry companion by exploring
                  places aligned with her interests. While she typically
                  discovers dog friendly venues through platforms like
                  Instagram, Yelp, Google, and word of mouth, Grace finds the
                  information disorganized and lacking clarity on whether a
                  place is truly pet friendly.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Information Architecture</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DogGoooInformationArchitecture}
                    alt="DogGooo Information Architecture"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  DogGooo is structured around four key components: Explore,
                  Favorites, Contributions, and Profile. The primary objective
                  is to create a user friendly and convenient platform that
                  empowers users to easily identify pet friendly places and
                  access a plethora of recommendations. Designing the
                  information architecture provided a clear roadmap for creating
                  wireframes and organizing subcategories within the four main
                  components.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Initial Sketch</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DogGoooInitialSketch}
                    alt="DogGooo Initial Sketch"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  The primary user flow of the app involves users searching for
                  a specific category and viewing dog friendly places. A
                  significant challenge during the design process was breaking
                  down the user flow into manageable and intuitive steps. While
                  the navigation was clear from my perspective, I recognized the
                  need for multiple revisions to ensure a user friendly
                  experience, addressing potential clarity issues from the point
                  of view of users.
                </p>
              </div>
            </div>
            <div
              className={`${styles.contentWrapper} animate__animated animate__fadeInUp`}
            >
              <div
                className={`${styles.contentTitle} animate__animated animate__fadeInUp`}
              >
                <h2>Usability Testing</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className={`${styles.videoCover} animate__animated animate__fadeInUp`}
                >
                  <source src={DogGoooWireframes} type="video/mp4"></source>
                </video>
                <p>
                  Based on my research findings, it became evident that users
                  are more inclined to seek lists of pet friendly
                  recommendations rather than checking the pet friendliness of
                  specific places. In response, I designed the Explore page to
                  feature numerous lists and images of dog friendly places,
                  providing users with a variety of options and making it easier
                  for them to discover stores that cater to their pets.
                </p>
                <p>
                  During my user testing sessions, I refined aspects such as the
                  filter page, making it visible on the Explore page for easy
                  access. Users can now scroll through filters and choose the
                  ones that suit their preferences. For testing scenarios, I
                  presented a situation where users were looking for dog
                  friendly boutiques. They can either choose the specific
                  boutiques filter or input related tags in the search bar for a
                  more tailored search. Clicking on a search result provides
                  detailed information, reviews, and images of the place, while
                  the directions feature redirects them to Maps or Google Maps
                  for seamless navigation.
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
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <div>
                  <img
                    src={DogGoooPrototype}
                    alt="DogGooo Prototype"
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
                <h2>Learning Outcomes</h2>
              </div>
              <div
                className={`${styles.contentDescription} animate__animated animate__fadeInUp`}
              >
                <p>
                  Through this experience, I delved into the fundamentals and
                  theories of UX design, applying them to my personal project.
                  While my passion drove the project, I faced the initial
                  challenge of separating my own perspective from the actual
                  needs of users, eliminating unnecessary features like
                  Restaurant Booking. Leading interviews taught me the
                  significance of asking meaningful questions for deeper
                  insights into user behavior. This project has fueled my
                  motivation to explore new design tools and elevate my skills
                  in UX design.
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
