import { Button, Space } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  FileOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function PersonalLinks() {
  return (
    <Space wrap style={{ gap: "16px" }}>
      <a
        href="mailto:christymadilao7@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="large"
          type="primary"
          icon={<MailOutlined />}
          style={{ backgroundColor: "#d8ebeb", boxShadow: "none" }}
        />
      </a>
      <a
        href="https://github.com/christymadilao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="large"
          type="primary"
          icon={<GithubOutlined />}
          style={{ backgroundColor: "#c8eca4", boxShadow: "none" }}
        />
      </a>
      <a
        href="https://drive.google.com/file/d/1Hh0CanI4SGIdZi8CTC3hLeLSHPeRmFJN/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="large"
          type="primary"
          icon={<FileOutlined />}
          style={{ backgroundColor: "#ffc3bd", boxShadow: "none" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/christymadilao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="large"
          type="primary"
          icon={<LinkedinOutlined />}
          style={{ backgroundColor: "#a0b2e8", boxShadow: "none" }}
        />
      </a>
    </Space>
  );
}
