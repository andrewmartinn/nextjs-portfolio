"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import React from "react";
import { useInSectionView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useInSectionView("Experience");

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item) => (
          <React.Fragment key={item.id}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#F3F4F6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: " 0.4rem solid #9CA3AF",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
