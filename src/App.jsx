
import "./App.css";

function App() {
  return (
    <div className="website">
      <header className="navbar">
        <a href="#home" className="logo">
          FITNESS<span> CLUB</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#membership">Membership</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">YOUR FITNESS JOURNEY STARTS HERE</p>
          <h1>
            BUILD YOUR
            <br />
            <span>BEST SELF.</span>
          </h1>
          <p className="hero-text">
            Get stronger, feel healthier, and become the best
            version of yourself with Fitness Club.
          </p>
          <a href="#membership" className="btn">
            Join Our Gym
          </a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p className="tagline">WHO WE ARE</p>
          <h2>About Fitness Club</h2>
        </div>

        <p className="about-text">
          Fitness Club is a place where everyone can work towards
          a healthier lifestyle. Our goal is to help you build
          strength, improve fitness, and stay motivated every day.
          Start at your own pace and keep moving forward.
        </p>

        <div className="stats">
          <div>
            <h3>Modern</h3>
            <p>Gym Equipment</p>
          </div>
          <div>
            <h3>Expert</h3>
            <p>Fitness Guidance</p>
          </div>
          <div>
            <h3>Flexible</h3>
            <p>Workout Plans</p>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="tagline">WHAT WE OFFER</p>
          <h2>Our Services</h2>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <div className="service-icon">🏋️</div>
            <h3>Strength Training</h3>
            <p>
              Build strength and improve your fitness with
              structured weight-training workouts.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">🏃</div>
            <h3>Cardio Training</h3>
            <p>
              Improve stamina and support heart health with
              regular cardio exercises.
            </p>
          </article>

          <article className="service-card">
            <div className="service-icon">💪</div>
            <h3>Personal Training</h3>
            <p>
              Work towards your fitness goals with guidance
              and a workout routine that suits you.
            </p>
          </article>
        </div>
      </section>

      <section className="section membership" id="membership">
        <div className="section-heading">
          <p className="tagline">CHOOSE YOUR PLAN</p>
          <h2>Membership Plans</h2>
        </div>

        <div className="plan-grid">
          <article className="plan-card">
            <h3>Basic</h3>
            <p className="price">₹800 <span>/ month</span></p>
            <ul>
              <li>Gym access</li>
              <li>Basic equipment</li>
              <li>General workout guidance</li>
            </ul>
            <a href="#contact" className="btn btn-outline">
              Get Started
            </a>
          </article>

          <article className="plan-card featured">
            <p className="popular">POPULAR</p>
            <h3>Standard</h3>
            <p className="price">₹2,100 <span>/ 3 months</span></p>
            <ul>
              <li>Gym access</li>
              <li>Strength and cardio training</li>
              <li>Workout guidance</li>
            </ul>
            <a href="#contact" className="btn">
              Get Started
            </a>
          </article>

          <article className="plan-card">
            <h3>Premium</h3>
            <p className="price">₹7,000 <span>/ year</span></p>
            <ul>
              <li>Gym access</li>
              <li>Strength and cardio training</li>
              <li>Personal fitness guidance</li>
            </ul>
            <a href="#contact" className="btn btn-outline">
              Get Started
            </a>
          </article>
        </div>
        <p className="plan-note">
          * Prices are sample prices for this college project.
        </p>
      </section>

      <section className="section contact" id="contact">
        <div className="section-heading">
          <p className="tagline">LET'S GET STARTED</p>
          <h2>Contact Us</h2>
          <p>Have a question? Send us a message.</p>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you! Your demo message has been submitted.");
            event.target.reset();
          }}
        >
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          FITNESS<span> CLUB</span>
        </a>
        <p>Stay consistent. Stay strong. Stay healthy.</p>
        <p className="copyright">
          © 2026 Fitness Club. College Project.
        </p>
      </footer>
    </div>
  );
}

export default App;
