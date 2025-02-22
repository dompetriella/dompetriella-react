import { AnimatePresence, motion } from "framer-motion";
import { ProjectButton } from "./ProjectButton";
import { ProjectItem } from "./ProjectItem";
import { ProjectItemData } from "../../../models/projectItemData";
import { useState } from "react";
import useScreenWidth from "../../../hooks/useScreenWidth";
import useIsMobile from "../../../hooks/useIsMobile";

export function ProjectItemArea({
  buttonTitle,
  projectItemContent,
  isLeft = true,
}: {
  buttonTitle: string;
  projectItemContent: ProjectItemData[];
  isLeft?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isMobile: boolean = useIsMobile();

  return (
    <div
      style={{
        paddingLeft: isMobile ? 0 : 96,
        paddingRight: isMobile ? 0 : 96,
      }}
      className="flex flex-col justify-center items-center my-8"
    >
      <div className="flex flex-col items-center">
        <ProjectButton
          buttonText={buttonTitle.toUpperCase()}
          onClick={() => setIsExpanded(!isExpanded)}
          isExpanded={isExpanded}
          isLeft={isLeft}
        />

        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              className="flex flex-wrap justify-center items-center"
              animate={{ height: "auto" }}
              exit={{
                height: 0,
                transition: {
                  duration: 0.5,
                  ease: "circInOut",
                  delay: 0.5,
                },
              }}
            >
              {projectItemContent.map((projectItem, index) => (
                <ProjectItem projectItemData={projectItem} index={index} />
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
