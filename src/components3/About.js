import React from "react";

const About = () => {
  return (
    <div className="blog">
      <div class="card aboutcard">
        <div class="card-body">
          <h5 class="card-title">About application</h5>
          <p class="card-text">
            Note-taking is a pretty personal thing. Some people are meticulous
            in their notebook organization, with careful folders, subheads, and
            bullets. Others, myself among them, take more of a
            scrawl-it-anywhere-you-can approach. However you like to take
            notes—whether they're text-only or elaborate scrapbooks—there's a
            notes app out there that can handle all your weird quirks and
            note-taking needs Now that we are living in a world where life
            without technology is unimaginable, our note-taking practice has
            gone digital. Thats why we now have note-taking apps. Note-taking
            apps are tools or software that allow you to write or type and draw
            on your own devices to record information, instead of hand-writing
            them down. These apps allow you to: Organize and store all important
            information and notes digitally Add multimedia like images, videos,
            audios, live recordings, etc. to enrich your notes Collaborate and
            share notes, easily and quickly, with others in real-time.
            Take your your personal notes on the cloud
          </p>
          <div className="contanierlogo">
          <a href="https://twitter.com/_yung_tweets_" class="btn btn-primary" target="_blank">
             <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/yung-coder" class="btn btn-white bg-black text-white" target="_blank">
             <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" class="btn btn-primary" target="_blank">
             <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
