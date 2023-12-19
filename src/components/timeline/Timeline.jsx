import React from "react";
import timelineElements from "../timelines/timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from "../../img/svgs/camera.svg";
import { ReactComponent as SchoolIcon } from "../../img/svgs/book.svg"; 
import { ReactComponent as ChildIcon } from "../../img/svgs/cubes.svg";

const Timeline = (props) => {
  let workIconStyles = { background: "#ffffff" };
  let schoolIconStyles = { background: "#ffffff" };
  let childIconStyles = { background: "#000000" };

  return (
    <VerticalTimeline>
      {timelineElements[props.info.id - 1].map((element) => {
        return (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            style={{ color: "#ce8f00", background: "#000000"}}
            iconStyle={
              element.icon === "work"
                ? workIconStyles
                : element.icon === "school"
                  ? schoolIconStyles
                  : childIconStyles
            }
            icon={
              element.icon === "work" ? (
                <WorkIcon />
              ) : element.icon === "school" ? (
                <SchoolIcon />
              ) : (
                <ChildIcon />
              )
            }
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <p id="description">{element.description}</p>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
