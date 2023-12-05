import { Card } from "antd";
import PersonalLinks from "./PersonalLinks";
import SkillTags from "./SkillTags";
import profile from "./profile.jpg";
import styles from "./AboutCard.module.css";

export default function AboutCard() {
  return (
    <Card style={{ width: "840px", height: "424px" }}>
      <div className={styles.container}>
        <div style={{ marginLeft: "16px" }}>
          <h1 className={styles.title}>Christy Madilao</h1>
          <h2 className={styles.position}>UX Engineer at Rakuten Asia</h2>
          <p className={styles.description}>
            I am a ux designer and software engineer with a passion for design,
            problem solving and learning.
          </p>
          <PersonalLinks />
          <SkillTags />
        </div>
        <div>
          <img src={profile} alt="christy madilao" className={styles.profile} />
        </div>
      </div>
    </Card>
  );
}
