import { useState } from "react";
import {
  CONTENT_appsProjectItemContent,
  CONTENT_artProjectItemContent,
  CONTENT_gamesProjectItemContent,
} from "../../content/projects/appsProjectContent";
import { ProjectButton } from "./components/ProjectButton";
import { ProjectItem } from "./components/ProjectItem";
import { AnimatePresence, motion } from "framer-motion";

export function Projects() {
  const [showApps, setShowApps] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [showGames, setShowGames] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        {/* need to refactor this into its own "project chunk"
        will be useful for the other buttons
        and swapping out buttons for titles */}
        <div>
          <ProjectButton
            buttonText={"Art".toUpperCase()}
            onClick={() => setShowArt(() => !showArt)}
          />
          <AnimatePresence>
            {showArt ? (
              <motion.div
                animate={{ height: "auto" }}
                exit={{
                  height: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
              >
                {CONTENT_artProjectItemContent.map((projectItem, index) => (
                  <ProjectItem projectItemData={projectItem} index={index} />
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
