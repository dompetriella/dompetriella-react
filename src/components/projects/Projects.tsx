import {
  CONTENT_appsProjectItemContent,
  CONTENT_artProjectItemContent,
  CONTENT_gamesProjectItemContent,
} from "../../content/projects/appsProjectContent";
import { ProjectItemArea } from "./components/ProjectArea";

export function Projects() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full overflow-x-clip">
        <ProjectItemArea
          buttonTitle={"Apps"}
          projectItemContent={CONTENT_appsProjectItemContent}
        />
        <ProjectItemArea
          buttonTitle={"Art"}
          projectItemContent={CONTENT_artProjectItemContent}
          isLeft={false}
        />
        <ProjectItemArea
          buttonTitle={"Games"}
          projectItemContent={CONTENT_gamesProjectItemContent}
        />
      </div>
    </>
  );
}
