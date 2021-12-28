// 6 projects with links and pictures
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./portfolio.css";

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
              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img
                        src="images/BudgetTracker.png"
                        alt="Budget Tracker"
                      />
                    </div>
                    <h4 className="port-title">Budget Tracker</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, Mongo, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      The user can add expenses or deposits to their budget with
                      or without a connection. When entering transactions
                      offline, they should populate the totals when brought back
                      online.
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

              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img src="images/foodTruck.png" alt="Food Truck App" />
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

              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img
                        src="images/PasswordGenerator.png"
                        alt="Password Generator"
                      />
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

              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img
                        src="images/Portfolio3a.png"
                        alt="Alternate Portfolio"
                      />
                    </div>
                    <h4 className="port-title">Alternate Portfolio</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, HTML, CSS, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      This is an alternate portfolio designed using handlebars
                      and TailwindCSS.
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

              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img
                        src="images/Project1.jpg"
                        alt="Health and Wellness App"
                      />
                    </div>
                    <h4 className="port-title">Health and Wellness App</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, API, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      The user can select workout exercises as well as food
                      items to add to a list for the week.
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

              <div className="col-lg-12">
                <div className="port-item">
                  <div className="port-comment">
                    <div className="port-info">
                      <img
                        src="images/WorkoutTracker1.png"
                        alt="Workout Tracker"
                      />
                    </div>
                    <h4 className="port-title">Workout Tracker</h4>
                    <p className="port-subtitle">
                      Tech Used: Javascript, Mongo, Heroku{" "}
                    </p>
                    <p className="port-desc">
                      This app allows a user to create a workout and add
                      exercises to it to keep track of certain stats. The front
                      end work was provided and the back end was set up using
                      node express and mongodb atlas.
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
