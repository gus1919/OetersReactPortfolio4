// resume page
import { useState } from "react";
import "./resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 62 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "MongoDB", ratingPercentage: 55 },
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 45 },
  ];

  const projectDetails = [
    {
      title: "Health and Wellness App",
      duration: { fromDate: "2021", toDate: "2021" },
      subHeading: "HTML, CSS, Javascript, Jquery, Bulma, Server-Side API",
      description:
        "An app to help a busy professional plan meals and workouts.",
    },
    {
      title: "Food Truck App",
      duration: { fromDate: "2021", toDate: "2021" },
      subHeading: "Nuxtjs, Vuejs, Animejs, Javascript, SCSS, CSS, HTML",
      description: "An app to locate food trucks in your area.",
    },
    {
      title: "Read Me Generator",
      duration: { fromDate: "2021", toDate: "2021" },
      subHeading: "Javascript, node.js",
      description:
        "Using Node JS, this will create a readme file based on answers provided from the CLI.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kent State University"}
        subHeading={"Bachelor's of Science, Political Science"}
        fromDate={"1998"}
        toDate={"2002"}
      />
      <ResumeHeading
        heading={"University of Cincinnati"}
        subHeading={"Masters of Community Planning"}
        fromDate={"2005"}
        toDate={"2007"}
      />
      <ResumeHeading
        heading={"OSU Coding Bootcamp"}
        subHeading={"Certificate of Completion"}
        fromDate={"2021"}
        toDate={"2022"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Butler County Common Pleas Court"}
          subHeading={"Probation Officer II"}
          fromDate={"2013"}
          toDate={"Current"}
        />
        <div className="experience-description">
          <span className="resume-description-text">"Thorough Research"</span>
          <br />
          <span className="resume-description-text">"Acurate Reports"</span>
          <br />
          <span className="resume-description-text">"Time Management"</span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Best Buy"}
          subHeading={"Customer Service Specialist"}
          fromDate={"2007"}
          toDate={"2011"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            "Customer Satisfaction"
          </span>
          <br />
          <span className="resume-description-text">"Marketing and Sales"</span>
          <br />
          <span className="resume-description-text">"Business Management"</span>
          <br />
        </div>
      </div>
    </div>,
    <div className="resume-screen-container" key="programming-skills">
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Coding"
        description="I enjoy computer programming and learning new things."
      />
      <ResumeHeading
        heading="Outdoors"
        description="Time spent in the woods is time well spent."
      />
      <ResumeHeading
        heading="Gaming"
        description="Games relax the mind and expand the horizons."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../../public/assets/${bullet.logoSrc}`)}
          alt="oops no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };
  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
