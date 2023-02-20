import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#042469">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Oct 2022 -  March 2023"
          iconStyle={{ background: "#042469", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Birmingham, UK, Remote
          </h3>
          <p>Bootcamp - Front-End Web Development and UX Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022 July"
          iconStyle={{ background: "#f95f4e", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Global Consumer Insights Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
          <p>----</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#f95f4e", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Global Client Executive
          </h3>
          <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
          <p>----</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2018 - 2019"
          iconStyle={{ background: "#f95f4e", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Global Business Development
          </h3>
          <h4 className="vertical-timeline-element-subtitle">London, UK</h4>
          <p>----</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Sept 2014 - June 2018"
          iconStyle={{ background: "#042469", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Glasgow Caledonian University, UK
          </h3>
          <p>BA (Hons) International Marketing </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
