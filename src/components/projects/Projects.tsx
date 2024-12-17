import { CONTENT_appsProjectItemContent } from "../../content/projects/appsProjectContent";
import { ProjectItem } from "./components/ProjectItem";

export function Projects() {
  return (
    <>
      {CONTENT_appsProjectItemContent.map((projectItem) => (
        <ProjectItem projectItemData={projectItem} />
      ))}
    </>
  );
}
