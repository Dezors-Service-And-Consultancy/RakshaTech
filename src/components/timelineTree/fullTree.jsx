import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function FullTree() {
  return (
    <div id="schedule">
      <div className="">
        <VerticalTimeline lineColor="#02F6B3" layout="2-columns">
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "linear-gradient(to bottom, #007A58, #00B383)",
              color: "#fff",
              marginRight: "",
            }}
            contentArrowStyle={{ borderRight: "20px solid  white" }}
            iconStyle={{ background: "#02F6B3", color: "#fff" }}
          >
            <h1 className="text-3xl text-black">Event Commencement</h1>
            <h1 className="text-xl mt-4">commencing of the event</h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "linear-gradient(to bottom, #007A58, #00B383)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "20px solid  white" }}
            iconStyle={{ background: "#02F6B3", color: "#fff" }}
          >
            <h1 className="text-3xl text-black">Event Commencement</h1>
            <h1 className="text-xl mt-4">commencing of the event</h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "linear-gradient(to bottom, #007A58, #00B383)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "20px solid  white" }}
            iconStyle={{ background: "#02F6B3", color: "#fff" }}
          >
            <h1 className="text-3xl text-black">Event Commencement</h1>
            <h1 className="text-xl mt-4">commencing of the event</h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "linear-gradient(to bottom, #007A58, #00B383)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "20px solid  white" }}
            iconStyle={{ background: "#02F6B3", color: "#fff" }}
          >
            <h1 className="text-3xl text-black">Event Commencement</h1>
            <h1 className="text-xl mt-4">commencing of the event</h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "linear-gradient(to bottom, #007A58, #00B383)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "20px solid  white" }}
            iconStyle={{ background: "#02F6B3", color: "#fff" }}
          >
            <h1 className="text-3xl text-black">Event Commencement</h1>
            <h1 className="text-xl mt-4">commencing of the event</h1>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            contentStyle={{
              background: "linear-gradient(to bottom, #007A58, #00B383)",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "20px solid  white" }}
            iconStyle={{ background: "#02F6B3", color: "#fff" }}
          >
            <h1 className="text-3xl text-black">Event Commencement</h1>
            <h1 className="text-xl mt-4">commencing of the event</h1>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

    </div>
  );
}
