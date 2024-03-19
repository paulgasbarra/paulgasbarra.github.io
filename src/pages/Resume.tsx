const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1 style={{ textAlign: "center" }}>Resume</h1>
      </header>

      <section>
        <h2>Objective</h2>
        <p>
          My goal is to make useful things that help people every day. With over
          8 years of successful front end delivery, I am driven to enrich my
          engineering experiences and develop performant back end services.
        </p>
      </section>

      <section>
        <h2>Recent Experience</h2>
        <article>
          <h3>mypeach.ai — Contract Software Engineer</h3>
          <p>January 2024 — February 2024</p>
          <ul>
            <li>
              Building out the frontend for an AI chat bot, using Next.js,
              React, and Materials UI.
            </li>
            <li>
              Creating chatbot creation flows, user onboarding, and subscription
              checkout for a new generation of AI companions.
            </li>
          </ul>
        </article>
        <article>
          <h3>The Muse — Senior Software Engineer</h3>
          <p>December 2021 — May 2023</p>
          <ul>
            <li>
              Streamlined data collection by writing a TypeScript library that
              overhauled site-wide user tracking. This reduced events reported
              by 90% and facilitated better data analytics.
            </li>
            <li>
              Improved SEO on The Muse’s job board by revamping metadata. This
              effort improved job listing visibility in Google’s job widget. We
              saw a 70% uplift in job views and job applications since Q1 2022.
            </li>
            <li>
              Added experimentation frameworks to a React based website to gauge
              performance of new interactive features.
            </li>
            <li>
              Wrote tech briefs based on product documentation to establish
              technical direction for the engineering team.
            </li>
          </ul>
        </article>
        <article>
          <h3>Intersection - Senior Software Engineer</h3>
          <p>August 2014 — December 2021</p>
          <ul>
            <li>
              Working with large US transit organizations that total 440 million
              annual riders, we used Python, Django, AWS, and React to build a
              system that consolidates real-time train and bus arrivals, system
              alerts, PSAs, and ads. Clients included CTA, SEPTA, NJT, and LA
              Metro.
            </li>
            <li>
              I built user interface component libraries with React and Redux
              that help over 1.4 million daily commuters find their way in
              cities across the country.
            </li>
            <li>
              Used Mapbox and other mapping technologies to create wayfinding
              applications for Hudson Yards, Port Authority and New Rochelle{" "}
            </li>
            <li>
              Built React applications to develop and maintain client and public
              facing user experiences for retail and museum spaces, such as
              Hudson Yards and the Edward M. Kennedy Institute.
            </li>
            <li>
              Combined near-field technology, websockets, React, and augmented
              reality to prototype the shopping experience of the future for
              Walmart.
            </li>
            <li>
              Created bots for Google Home and Amazon Alexa using Javascript and
              AWS functions to demonstrate Intersection’s developmental capacity
              in conversational interfaces.
            </li>
          </ul>
        </article>
        <article>
          <h3>General Assembly - Web Development Immersive Student</h3>
          <p> April 2014 — July 2014 </p>
          <ul>
            <li>
              Learned standard web technology and coding practices including
              Sinatra, Rails, Ruby, SASS, Rspec, JQuery, Backbone, D3, Github,
              Ajax, Json, and Node.js.
            </li>
            <li>
              Practiced web development 12 hours a day, creating sophisticated
              web applications.
            </li>
            <li>Practiced collaboration with developers of varying skill.</li>
          </ul>
        </article>
        <article>
          <h3>Various - Freelance Web Content Creator</h3>
          <p>June 2012 — April 2014</p>
          <ul>
            <li>
              2U - Used hypertext markup to transcribe and sync university video
              lectures into a proprietary CMS.{" "}
            </li>
            <li>
              Foodler.com – Crafted compelling copy promoting partner
              restaurants. Calibrated geo-location coordinates to fine-tune
              restaurant delivery areas.
            </li>
          </ul>
        </article>
        <article>
          <h3>Blue State Digital - Web Project Manager</h3>
          <p>July 2013 — February 2014</p>
          <ul>
            <li>
              Managed teams creating and improving world-class web platforms for
              Tier 1 clients including American Express and NBC Universal
            </li>
            <li>
              Guided projects using both agile and waterfall management
              methodologies
            </li>
            <li>
              Built out project timelines, collected resources, and followed up
              on task progress
            </li>
          </ul>
        </article>
      </section>

      <section>
        <h2>Skills</h2>
        <p>Languages: Javascript, Typescript, HTML, CSS, Python, Ruby</p>
        <p>Frameworks: React</p>
        <p>
          Tools: VSCode, JQuery, Bash, Git, Github, Photoshop, Node.js, Amazon
          S3, Confluence, Mapbox
        </p>
        <p>Project Management Tools: Jira, Trello</p>
      </section>

      <section>
        <h2>Education</h2>
        <p>General Assembly — Web Development Immersive Program</p>
        <p>University of North Carolina Wilmington — MFA Creative Writing</p>
        <p>Oklahoma State University — BA English Literature</p>
      </section>

      <section>
        <h2>Interests</h2>
        <p>Streaming Poetry on Twitch</p>
        <p>Running</p>
        <p>Guitar</p>
      </section>
    </div>
  );
};

export default Resume;
