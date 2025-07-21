import React from "react";
import "./services.css";
import aiIcon1 from "../../assets/ai_icon1.svg";
import aiIcon2 from "../../assets/ai_icon2.svg";
import aiIcon3 from "../../assets/ai_icon3.svg";
import ServiceCard from "./serviceCard";

const servicesList = [
  {
    id: 1,
    title: "AI-Powered Project Planning",
    description:
      "Leverage AI to create detailed project plans, timelines, and resource allocation for your tech projects.",
    icon: aiIcon1,
  },
  {
    id: 2,
    title: "Intelligent Code Generation",
    description:
      "Use AI to generate clean, efficient, and scalable code snippets or entire modules tailored to your project needs.",
    icon: aiIcon2,
  },
  {
    id: 3,
    title: "Automated Testing & Debugging",
    description:
      "Implement AI-driven testing frameworks that automatically detect bugs and suggest fixes to improve code quality.",
    icon: aiIcon3,
  },
];

const Services = () => {
  return (
    <section className="services_container">
      <h2 className="services_heading">
        Our AI Services for Building Tech Projects
      </h2>
      <ul className="services_list">
        {servicesList.map(({ icon, id, title, description }, index) => (
          <ServiceCard
            key={id}
            img={icon}
            heading={title}
            subHeading={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Services;
