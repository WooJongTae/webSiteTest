import Layout from "@/components/layout";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config/index.js";
import ProjectItem from "@/components/projects/project-item.js";

export default function Projects({ infoData }) {
  return (
    <Layout>
      <h1>프로젝트{infoData.length}</h1>
      {infoData.map((aProject) => (
        <ProjectItem data={aProject} key={aProject.id} />
      ))}
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
    data: {
      page_size: 100,
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
    },
  };

  const response = await axios.request(options);
  console.log(response.data.results);
  // const ProjectsNames = response.data.results.map((aProject) => (
  //   <ProjectItem data={aProject} key={aProject.id} />
  // ));
  const infoData = response.data.results;

  return {
    props: { infoData },
  };
}
