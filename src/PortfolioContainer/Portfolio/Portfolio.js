// 6 projects with links and pictures
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./portfolio.css";
import budget from "../../img/budgetTracker.gif";
import food from "../../img/foodTruck.gif";
import password from "../../img/passwordGenerator.gif";
import portfolio3a from "../../img/altportfolio.gif";
import project1 from "../../img/healthApp.gif";
import workout from "../../img/workoutTracker.gif";
import weatherGif from "../../img/WeatherGif.gif";
import powerup from "../../img/powerup.gif";

const Portfolio = (props) => {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <section className="portfolio-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="portfolio-carousel"
              {...options}
            >
              {/* Budget Tracker */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={budget} alt="Budget Tracker" />
                    </div>
                    <h4 className="port-title">Budget Tracker</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, Mongo, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      The user can add expenses or deposits to their budget with
                      or without an internet connection. Offline transactions
                      will update when the user is back online.
                    </p>
                    <a
                      className="port-links"
                      href="https://oetersbudgettracker.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/gus1919/BudgetTracker"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Food Truck App */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={food} alt="Food Truck App" />
                    </div>
                    <h4 className="port-title">Food Truck App</h4>
                    <p className="port-subtitle">
                      Tech Used: Nuxtjs, CSS Animations, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      This app allows a user to find local food trucks and rate
                      them. It also provides a link to the truck's website if it
                      has one.
                    </p>
                    <a
                      className="port-links"
                      href="https://firstappft.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/lostboysbangarang/FoodTruckProject"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Weather Dashboard App */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={weatherGif} alt="Weather Dashboard" />
                    </div>
                    <h4 className="port-title">Weather Dashboard App</h4>
                    <p className="port-subtitle">
                      Tech Used: NextJS, Javascript, Vercel{" "}
                    </p>
                    <p className="port-desc">
                      Using this app, a person can search for a city and find
                      the current and future weather conditions. Four cities in
                      Ohio have been pre-set.
                    </p>
                    <a
                      className="port-links"
                      href="https://next-weather-app-one.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/gus1919/nextWeatherApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Password Generator */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={password} alt="Password Generator" />
                    </div>
                    <h4 className="port-title">Password Generator</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, HTML, CSS{" "}
                    </p>
                    <p className="port-desc">
                      The user can generate a password between 8 and 128
                      characters with options to include numbers, special
                      characters, lowercase and uppercase characters.
                    </p>
                    <a
                      className="port-links"
                      href="https://gus1919.github.io/PasswordGenerator2/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/gus1919/PasswordGenerator2.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Alternate Porfolio */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={portfolio3a} alt="Alternate Portfolio" />
                    </div>
                    <h4 className="port-title">Alternate Portfolio</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, HTML, CSS, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      This is an alternate portfolio designed using handlebars
                      and TailwindCSS. It was deployed with Heroku and was an
                      earlier portfolio design.
                    </p>
                    <a
                      className="port-links"
                      href="https://justinoeters.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/gus1919/portfolio3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Health and Wellness App */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={project1} alt="Health and Wellness App" />
                    </div>
                    <h4 className="port-title">Health and Wellness App</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, API, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      The user can select workout exercises as well as food
                      items to add to a list for the week. Items and exercises
                      are saved and can be deleted.
                    </p>
                    <a
                      className="port-links"
                      href="https://haleywitherell.github.io/Health-Wellness/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/haleywitherell/Health-Wellness"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Powerup App */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={powerup} alt="Powerup App" />
                    </div>
                    <h4 className="port-title">Powerup App</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, React, GraphQL, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      An app designed to allow a user to save their favorite
                      video games to their account. Games may then be deleted at
                      the user's discretion.
                    </p>
                    <a
                      className="port-links"
                      href="https://powerup-game-app.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/Shawn52409/powerup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Workout Tracker  */}
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src={workout} alt="Workout Tracker" />
                    </div>
                    <h4 className="port-title">Workout Tracker</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, Mongo, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      This app allows a user to create a workout and add
                      exercises to it to keep track of certain stats. The stats
                      are kept using MongoDB.
                    </p>
                    <a
                      className="port-links"
                      href="https://oetersworkouttracker.herokuapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                    <a
                      className="port-links"
                      href="https://github.com/gus1919/workoutTracker2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
