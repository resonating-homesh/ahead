'use client'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./TimelineElements";

const VerticalSlider = () => {
    let beadIcon = { background: "#6441EF" }
  return (
    <div>
    <VerticalTimeline layout={"1-column-left"} lineColor={"#6441EF"}>
        {
            timelineElements.map(element => {
                return (
                    <VerticalTimelineElement
                    key={element.key}
                    
                    iconStyle={beadIcon}>
                        <h3 className="text-lg font-semibold"> {element.title}  </h3>
                        <h5> {element.description} </h5>
                        <h5> {element.description2 ? element.description2 : ""} </h5>
                        <h5> {element.description3 ? element.description3 : ""} </h5>
                    </VerticalTimelineElement>
                )
            })
        }
    </VerticalTimeline>
    </div>
  )
}

export default VerticalSlider