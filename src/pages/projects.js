import Layout from "@/components/layout";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config/index.js";

export default function Projects() {
  return (
    <Layout>
      <h1>프로젝트</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    data: { page_size: 100 },
  };

  const response = await axios.request(options);
  const ProjectsIds = response.data.results.map(
    (aProject) => aProject.properties.이름.title.plain_text
  );
  console.log(ProjectsIds);

  return {
    props: {},
  };
}
