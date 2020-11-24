/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from 'react-helmet'

import folder from "../assets/img/folder.svg";
import git from "../assets/img/git.svg";
import external from "../assets/img/external-link.svg";

export default function Projects() {
  const works = [
    {
      name: "ChuruchatRoom",
      disc: "Realtime Chatroom",
      tools: ["React", "Firebase", "Axios"],
      repo: 'https://github.com/christianparanas/chatroom',
      live: 'https://chatroom-ten.vercel.app'
    },
    {
      name: "Covid-19 Tracker",
      disc: "A web application for tracking coronavirus outbreak in the Philippines",
      tools: ["Javascript", "Coronavirus API", "Axios"],
      repo: 'https://github.com/christiannparanas/Project-coronavirus-tracker',
      live: 'https://covidv2.netlify.app'
    },
    {
      name: "Segregate Files",
      disc: "A desktop application that let's you to segregate your scatterd files, in just one click.",
      tools: ["Javascript", "ElectronJS", "NodeJS"],
      repo: 'https://github.com/christiannparanas/Node-segregate-files',
    },
    {
      name: "CodeProfile",
      disc: "A nicer look for your github account",
      tools: ["Javascript", "Github API", "Axios"],
      repo: 'https://github.com/christiannparanas/Project-codeProfile',
      live: 'https://codeprofile.netlify.app'
    },
    {
      name: "Pomodoro",
      disc: "Pomodoro is a timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.",
      tools: ["ReactJS"],
      repo: 'https://github.com/christiannparanas/React-Pomodoro',
      live: 'https://react-pomo.netlify.app'
    },
    {
      name: "Markdown Editor",
      disc: "Online based HTML5 filled Markdown Editor.",
      tools: ["ReactJS", "MarkedJS"],
      repo: 'https://github.com/christiannparanas/React-markdown-editor',
      live: 'https://react-mdown.netlify.app'
    },
    {
      name: "Freedom Wall",
      disc: "A mini web app that let you post your thingking anonymously.",
      tools: ["Javascript", "NodeJS", "MonggoDB"],
      repo: 'https://github.com/christiannparanas/Project-freedom',
      live: 'https://freedomthoughts.herokuapp.com'
    },
  ];

  return (
    <div className="projects">
      <Helmet htmlAttributes>
            <html lang="en" />
            <title>Christian Paranas | Projects</title>
      </Helmet>

      <div className="pro">Projects I built</div>

      {works.map((work) => (
        <div className="project-container">
          <div className="icons">
            <img src={folder} className="file" alt="" />
            <a href={work.repo} target="_blank">
               <img src={git} className="git" alt="" />
            </a>
            <a href={work.live} target="_blank">
               <img src={external} className="exter" alt="" />
            </a>
          </div>
          <div className="title">{work.name}</div>
          <div className="discription">{work.disc}</div>
          <div className="tool-title">Technology used:</div>
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
