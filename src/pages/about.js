import React from 'react';
import selfImage from '../../static/me.jpg';

const About = () => (
  <div className={"aboutContainer"}>
    <div className={"imageAndTaglineContainer"}>
      <div className={"imageContainer"}>
        <img src={selfImage} alt={"a picture of Evan Frawley"}/>
      </div>
      <div className={"taglineContainer"}>
        <p className={"motto"}>Personal Motto</p>
        <p className={"taglineQuote"}>"Don't go to sleep unless you're a better version of yourself than when you woke up."</p>
      </div>
    </div>
    <div>
      <p>Hiya! I'm Evan. I'm currently a senior at the University of Washington, studying Informatics focusing in Software Engineering. Coming from internships at two Seattle startups and project-focused courses at UW, my strong suit is working with a fast moving team that ships code quickly and efficiently. On the tech stack side, I am comfortable on both the front and back end, having built out UIs and REST API services during my internships. In my spare time, I enjoy being a teaching assistant for coding courses or tinkering with an array of programming side projects.</p>
      <p>I am currently taking a class in Golang, learning server-side web development. For this course, we will be building out a messaging app (like Slack) throughout the course of the quarter. To check out some of the progress with that, head over to the <a href="https://chat-client.evan.gg">client</a>. The API currently lives on <a href="https://api.evan.gg">api.evan.gg</a>, but is currently under development.</p>
    </div>
  </div>
)

export default About
