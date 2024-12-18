import { CONTENT_appsProjectItemContent } from "../../content/projects/appsProjectContent";
import { ProjectButton } from "./components/ProjectButton";
import { ProjectItem } from "./components/ProjectItem";

export function Projects() {
  return (
    <>
      <ProjectButton buttonText={"Apps".toUpperCase()} />
      {CONTENT_appsProjectItemContent.map((projectItem) => (
        <ProjectItem projectItemData={projectItem} />
      ))}
    </>
  );
}
