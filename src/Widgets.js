import React from 'react';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>

      {/* About Us Card */}
      <div className="widget__card">
        <h2>About us</h2>
        <img 
          className='widget__image' 
          src="./facebook.png" 
          alt="About Us" 
        />
        <p className='widget__text'>
          Facebook helps you connect and share with the people in your life. Whether it’s friends, family, or communities that matter to you, Facebook makes it easy to stay in touch, discover new experiences, and express what matters. We believe in bringing the world closer together by empowering people to build relationships and create meaningful conversations.
        </p>
      </div>

      {/* News Feed Style Cards */}
      <div className="widget__card">
        <h2>Latest News</h2>

        {/* Card 1 */}
        <div className="news__item">
          <img 
            src="./news1.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Global Heatwave Shatters Records</h4>
            <p>Record-breaking temperatures sweep across Europe and Asia, raising concerns over climate change. Health advisories have been issued in multiple countries.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news__item">
          <img 
            src="./news2.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Tech Giants Face New Antitrust Probe</h4>
            <p>Major tech companies are under investigation for alleged monopolistic practices. Regulators say consumer choice is being unfairly limited.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news__item">
          <img 
            src="./news3.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Stock Markets Rally After Inflation Drops</h4>
            <p>Global markets surged as new data showed inflation rates easing. Investors remain optimistic about interest rate cuts.</p>
          </div>
        </div>




        <div className="news__item">
          <img 
            src="./news4.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>AI Tools Reshape Modern Education</h4>
            <p>Classrooms are seeing a digital revolution as AI tools assist in personalized learning. Experts call for clear ethical guidelines.</p>
          </div>
        </div>




        <div className="news__item">
          <img 
            src="./news5.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Electric Cars Outsell Petrol for First Time in Europe</h4>
            <p>In a landmark shift, electric vehicle sales have surpassed petrol cars. Manufacturers race to scale up EV production.

</p>
          </div>
        </div>



        <div className="news__item">
          <img 
            src="./news6.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>NASA Detects Strong Solar Flare Heading to Earth</h4>
            <p>A powerful solar flare could disrupt satellite and GPS communications. The event is expected to peak within 48 hours.

</p>
          </div>
        </div>

        <div className="news__item">
          <img 
            src="./news7.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Major Cyberattack Hits Global Shipping Company</h4>
            <p>Operations at a leading shipping firm were disrupted by a ransomware attack. Authorities are investigating the breach.

</p>
          </div>
        </div>


        <div className="news__item">
          <img 
            src="./news8.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>India Launches World’s Largest Green Energy Project</h4>
            <p>Aimed at reducing carbon emissions, India has begun construction on a massive solar and wind power hybrid project in Rajasthan.</p>
          </div>
        </div>


        <div className="news__item">
          <img 
            src="./news9.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Stock Markets Rally After Inflation Drops</h4>
            <p>Global markets surged as new data showed inflation rates easing. Investors remain optimistic about interest rate cuts.</p>
          </div>
        </div>



        <div className="news__item">
          <img 
            src="./news1.png" 
            alt="news" 
            className="news__image" 
          />
          <div className="news__content">
            <h4>Global Scientists Develop Universal Flu Vaccine</h4>
            <p>Researchers claim early success in trials of a universal flu vaccine that could provide long-lasting protection against multiple strains.

</p>
          </div>
        </div>



      </div>

    </div>
  );
};

export default Widgets;
