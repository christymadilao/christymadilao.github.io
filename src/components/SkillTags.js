import { Space, Tag } from "antd";

export default function SkillTags() {
  return (
    <div style={{ marginTop: "16px" }}>
      <Space size={[0, 8]} wrap>
        <Tag color="#FEE4BD">Figma</Tag>
        <Tag color="#FEE4BD">React</Tag>
        <Tag color="#FEE4BD">HTML</Tag>
        <Tag color="#FEE4BD">CSS</Tag>
        <Tag color="#FEE4BD">Javascript</Tag>
        <Tag color="#FEE4BD">SQL</Tag>
        <Tag color="#FEE4BD">Git</Tag>
      </Space>
    </div>
  );
}
