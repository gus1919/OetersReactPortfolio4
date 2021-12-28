// Home Page and About Me Content

import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="container-fluid about-me">
      <div className="row">
        <div className="container-lg col-3">
          <div className="profile-picture-background"></div>
        </div>

        <div className="container text-center col-9 about-text">
          <p>
            Greetings, my name is Justin Oeters, pronounced like eight-ers, and
            I have been interested in programming and computers since my first
            Apple IIe in the 80’s. As a youth, in addition to computers, I was
            also a member of the Boy Scouts of America and a member of several
            sports teams. I graduated high school fourth in my class and have
            earned a bachelor’s degree and a master’s degree as well as attended
            one year of law school. My education invoked my thirst for knowledge
            and I strive to learn new things every day.
          </p>
          <br />
          <p>
            Regarding employment, I have had several jobs ranging from retail
            work to probation. My longest career paths have been as a customer
            service representative for Best Buy and currently, a Probation
            Officer for Butler County. Working for Best Buy, I learned about
            working with people and overcoming adversity as well as best
            business practices. As a probation officer, I learned to supervise,
            distribute tasks, and keep people motivated to stay on task.
            Although my employment has been rewarding, I am ready for greater
            challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
