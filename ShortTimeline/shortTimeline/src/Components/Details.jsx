import React from "react";
import style from "./Details.module.css";

import IndiEvt from "./IndiEvt";
const events = [
  {
    title: "HACKATHON (ROUND-1)",
    time: "9AM - 4PM",
    day: "Wed,Apr 04",
    backgroundColor: "#FFDDC1",
    number: "1st",
    imgSrc: "../images/hackathon.jpg",
    description:
      "Kick-off the hackathon with Round-1. Teams will brainstorm and start coding their innovative projects.",
  },
  {
    title: "WORKSHOP 1",
    time: "4PM - 6PM",
    day: "Wed,Apr 04",
    backgroundColor: "#FFABAB",
    number: "2nd",
    imgSrc: "../images/workshop.jpg",
    description:
      "A workshop focusing on key skills and tools necessary for the hackathon. Learn from industry experts.",
  },
  {
    title: "HACKATHON (ROUND-2)",
    time: "9PM - 12AM",
    day: "Wed,Apr 04",
    backgroundColor: "#FFC3A0",
    number: "3rd",
    imgSrc: "../images/hackathon.jpg",
    description:
      "Round-2 of the hackathon where teams continue working on their projects and refine their ideas.",
  },
  {
    title: "HACKATHON (ROUND-3)",
    time: "1AM - 10AM",
    day: "Wed,Apr 05",
    backgroundColor: "#B9FBC0",
    number: "4th",
    imgSrc: "../images/hackathon.jpg",
    description:
      "Final round of the hackathon. Teams present their prototypes and finalize their projects.",
  },
  {
    title: "SPEAKER SESSION-1",
    time: "10AM - 1PM",
    day: "Wed,Apr 05",
    backgroundColor: "#A0E7E5",
    number: "5th",
    imgSrc: "../images/speaker.jpg",
    description:
      "Engaging speaker session covering trends and insights in technology and innovation.",
  },
  {
    title: "HACKATHON (ROUND-4)",
    time: "2PM - 5PM",
    day: "Wed,Apr 05",
    backgroundColor: "#B9FBC0",
    number: "6th",
    imgSrc: "../images/hackathon.jpg",
    description:
      "Final chance for teams to make last-minute adjustments to their projects before submission.",
  },
  {
    title: "WORKSHOP 2",
    time: "9AM - 11AM",
    day: "Wed,Apr 06",
    backgroundColor: "#C4E538",
    number: "7th",
    description:
      "A follow-up workshop focusing on advanced topics and further skill development.",
  },
  {
    title: "SPEAKER SESSION 2",
    time: "11AM - 1PM",
    day: "Wed,Apr 06",
    backgroundColor: "#3A86FF",
    imgSrc: "../images/speaker.jpg",
    number: "8th",
    description:
      "Another insightful speaker session with industry leaders sharing their experiences and knowledge.",
  },
  {
    title: "VALEDICTORY",
    time: "3PM - 6PM",
    day: "Wed,Apr 06",
    backgroundColor: "#F9A825",
    imgSrc: "../images/workshop.jpg",
    number: "9th",
    description:
      "The closing ceremony of the event where winners are announced, and achievements are celebrated.",
  },
];
const Details = () => {
  return (
    <div className={`container-xxl ${style.outerContainer}`}>
      {events.map((event, index) => (
        <IndiEvt key={index} event={event} index={index} />
      ))}
    </div>
  );
};

export default Details;
