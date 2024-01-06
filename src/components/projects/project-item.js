export default function ProjectItem({ data }) {
  const projectTitle = data.properties.이름.title[0].plain_text;
  return (
    <div className="p-6 rounded-md bg-slate-400">
      <h1>{projectTitle}</h1>
    </div>
  );
}
