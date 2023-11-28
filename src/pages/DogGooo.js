import Layout from "antd/es/layout/layout";
import PersonalLinks from "../components/PersonalLinks";
import DogGoooCover from "../images/DogGoooCover.png";
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
        <div className={styles.pageContainer}>
          <div>
            <img
              src={DogGoooCover}
              alt="DogGooo Cover"
              className={`${styles.cover} animate__animated animate__fadeInUp`}
            />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Background</h2>
              </div>
              <div className={styles.contentDescription}>
                <p>
                  DogGooo is a mobile application that allows dog owners to
                  easily find dog friendly places within their location. Users
                  will also be able to view reviews made by dog owners on their
                  experience at the specific store, and the app will bring the
                  user to external pages to a navigation system. This app allows
                  users to plan their trips with their dogs and gives them a
                  sense of reassurance.
                </p>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Project Goal</h2>
              </div>
              <div className={styles.contentDescription}>
                <p>
                  Build, design, and conduct research for an iOS app that will
                  allow users to find pet friendly locations to bring their
                  furry friend along by searching for a location or utilizing
                  filters.
                </p>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Value Proposition</h2>
              </div>
              <div className={styles.contentDescription}>
                <ul>
                  <li>
                    The app will provide convenience for users who want to bring
                    their dog out as stores usually do not state if their pet
                    friendly online
                  </li>
                  <li>
                    It will allow users to easily find new dog friendly places
                    to explore with their dogs based on their lifestyle and
                    interests
                  </li>
                  <li>
                    It will encourage users to bring their dogs outside often
                    and prevents any guilt or worry about leaving them at home
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Research Goals</h2>
              </div>
              <div className={styles.contentDescription}>
                <ul>
                  <li>
                    I wanted to understand how users find dog friendly places
                    and their process for researching them
                  </li>
                  <li>
                    Gain insight into which places users want to bring their
                    dogs to
                  </li>
                  <li>
                    Learn how often users bring their dogs outside and include
                    them in their daily activities
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Research Process</h2>
              </div>
              <div className={styles.contentDescription}>
                <p>
                  I interviewed 12 interviewees and conducted questionnaires on
                  Instagram to conduct my user research.
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
                    How do you find dog-friendly places to bring your dog to?
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
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Research Results</h2>
              </div>
              <div className={styles.contentDescription}>
                <div>
                  <img
                    src={DogGoooResearchResults}
                    alt="DogGooo Research Results"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  I used Miro for mapping purposes and to better categorize my
                  research findings.
                </p>
                <p>The following user insights were derived:</p>
                <ul>
                  <li>
                    Learnt that users would often or would like to bring their
                    dogs to everyday places such as restaurants, malls,
                    boutiques and bakeries
                  </li>
                  <li>
                    Would avoid leaving their dog alone and cater their daily
                    routine to their dogs
                  </li>
                  <li>
                    Obtain pet friendly recommendations through Yelp, Instagram
                    and Google but found the process hard and time consuming as
                    information is not 100% accurate
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Persona</h2>
              </div>
              <div className={styles.contentDescription}>
                <div>
                  <img
                    src={DogGoooPersona}
                    alt="DogGooo Persona"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  After analyzing my research, I created my persona “Grace Low”
                  who recently adopted a puppy and wants to spend more time with
                  her puppy by bringing him to places that Grace is interested
                  in. She usually finds dog friendly places through channels
                  such as Instagram, Yelp, Google and word of mouth but she
                  finds it to be very disorganized and that there is little
                  information if a place is pet friendly.
                </p>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Information Architecture</h2>
              </div>
              <div className={styles.contentDescription}>
                <div>
                  <img
                    src={DogGoooInformationArchitecture}
                    alt="DogGooo Information Architecture"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  DogGooo will consist of four main components: Explore,
                  Favourites, Contributions and Profile. The main goal of
                  DogGooo was to make it a convenient platform that was user
                  friendly and allow them to find if a specific place is dog
                  friendly or to find numerous recommendations of dog friendly
                  places. Constructing the information architecture of the app
                  allowed me to have a clear direction as to how I should create
                  my wireframes and also sort out various subcategories and
                  where they will belong to the four components.
                </p>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Initial Sketch</h2>
              </div>
              <div className={styles.contentDescription}>
                <div>
                  <img
                    src={DogGoooInitialSketch}
                    alt="DogGooo Initial Sketch"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
                <p>
                  The main user flow of the app was to search for a particular
                  category and for the user to see the places that are
                  doDogfriendly. The main challenge I faced with the user flows,
                  was trying the break it down into small and feasible steps. As
                  it was obvious for me on how to navigate through the app, it
                  was not as clear for the users point of view, so I went
                  through many revisions to break down the steps.
                </p>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Usability Testing</h2>
              </div>
              <div className={styles.contentDescription}>
                <p>
                  From my research findings, I found that most users do not find
                  if a specific place is dog friendly. Rather, they look for a
                  list of recommendations and will go to the stores that are pet
                  friendly. For the explore page, I designed it such that there
                  are many lists and images of the dog friendly places to give
                  users many options.
                </p>
                <p>
                  Through my user testing sessions, I made adjustments such as
                  the filter page, and made it visible on the explore page, so
                  that users can scroll through the filters and select the
                  desired one. For my user testing, I made the scenario as to
                  how the user will find dog friendly boutiques on the app.
                  Users have two options as to how they would navigate this. The
                  most specific way is to click on the boutiques filter, but
                  users have the option of inputting tags such as boutiques, or
                  find a specific pet friendly place through the search bar.
                  Once they click on one of the search results, it will provide
                  them with information of the place, reviews, and also some
                  images of the place. The user can also click on the directions
                  feature, where it will redirect them to their Maps feature on
                  their phone, or Google Maps.
                </p>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Prototype</h2>
              </div>
              <div className={styles.contentDescription}>
                <div>
                  <img
                    src={DogGoooPrototype}
                    alt="DogGooo Prototype"
                    className={`${styles.descriptionCover} animate__animated animate__fadeInUp`}
                  />
                </div>
              </div>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.contentTitle}>
                <h2>Learning Outcomes</h2>
              </div>
              <div className={styles.contentDescription}>
                <p>
                  Through this experience, I was able to learn the fundamentals
                  and theories of UX design and apply it to my own personal
                  project. As this project was a personal passion of mine, the
                  main challenge I had initially was taking out my own
                  perspective of how the app should look like and including
                  unnecessary features such as the Restaurant Booking, as users
                  did not really need it to fulfill their goals. I also learnt
                  how important it is to lead the interviews and ask meaningful
                  questions that would provide me with better insight as to how
                  users will use the app. From this project, I am more motivated
                  to learn new design tools and further my skills in UX design.
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
