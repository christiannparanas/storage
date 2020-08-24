import React from "react";
import folder from "../assets/img/folder.svg";
import git from "../assets/img/git.svg";
import external from "../assets/img/external-link.svg";

export default function Projects() {
  const works = [
    {
      name: "Covid-19 Tracker",
      disc: "lorem ipsum dolor set amet tae tae gwapo ako sabi nila ng mama ko",
      tools: ["react", "material ui", "node"],
    },
    {
      name: "Inventory MS",
      disc: "lorem ipsum dolor set amet tae tae gwapo ako sabi nila ng mama ko",
      tools: ["react", "material ui"],
    },
  ];

  return (
    <div className="projects">
      <div className="pro">Projects I built</div>

      {works.map((work) => (
        <div className="project-container">
          <div className="icons">
            <img src={folder} className="file" alt="" />
            <img src={git} className="git" alt="" />
            <img src={external} className="exter" alt="" />
          </div>
          <div className="title">{work.name}</div>
          <div className="discription">{work.disc}</div>
          <div className="tools">
            {work.tools.map(tool => (
               <div className="tool">{tool}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
