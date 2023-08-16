import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  return (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      className={styles.menu}
    >
      <Menu.Item key="/about" className={styles.menuItem}>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? styles.selected : styles.menuItem
          }
        >
          About
        </Link>
      </Menu.Item>
      <Menu.Item key="/projects" className={styles.menuItem}>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects"
              ? styles.selected
              : styles.menuItem
          }
        >
          Projects
        </Link>
      </Menu.Item>
    </Menu>
  );
}
