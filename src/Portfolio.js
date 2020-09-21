import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/project")
      .then((res) => res.json())
      .then((data) => this.setState({ id: data.id }));
  }
  render() {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Language I used</h3>
        <section id="cd-timeline" class="cd-container">
          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture"></div>

            <div class="cd-timeline-content">
              <h2>Mul-Quiz on the block</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  Front End
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  2020.Aug
                </span>
              </div>
              <p>
                'Mul-quiz on the block' is a web page of 'Quiz' format referred
                to 'Kaboot'. The purpose of this web page is to provide
                educational facilities an experience of a variety quiz
                platforms.
                <br />
                <a href="https://github.com/hyeyoon0808/Mul-quiz">
                  Github Link
                </a>
              </p>
              <ul class="content-skills">
                <li>Reactjs</li>
                <li>Mobx</li>
                <li>React-router</li>
                <li>Sass</li>
              </ul>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-movie"></div>

            <div class="cd-timeline-content">
              <h2>FTP Program</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  Back End
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  2019.Oct - 2019.Nov
                </span>
              </div>
              <p>
                a network protocol specification, a client program that
                implements the client side of the protocol, and a server program
                that implements the server side of the protocol.
                <br />
                <a href="https://github.com/hyeyoon0808/FTP_program">
                  Github Link
                </a>
              </p>
              <ul class="content-skills">
                <li>Linux</li>
                <li>C</li>
              </ul>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-picture"></div>

            <div class="cd-timeline-content">
              <h2>Transcription System</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  Back End
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  2019.Apr - 2019.Jul
                </span>
              </div>
              <p>
                Western Australian Genealogical Society and Army Museum of
                Western Australia Team Manuscript consists of seven students who
                are responsible to complete the transcription process. The
                process requires us to upload images from World War I and World
                War II and transcribe them into a digital format.
                <br />
                <a href="https://github.com/hyeyoon0808/Transcription_system">
                  Github Link
                </a>
              </p>
              <ul class="content-skills">
                <li>Python/Django</li>
                <li>Javascript</li>
                <li>Tensorflow</li>
                <li>HTML/CSS</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>

          <div class="cd-timeline-block">
            <div class="cd-timeline-img cd-location"></div>
            <div class="cd-timeline-content">
              <h2>Wind Sensor System</h2>
              <div class="timeline-content-info">
                <span class="timeline-content-info-title">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  Back End
                </span>
                <span class="timeline-content-info-date">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  2019.Feb - 2019.Apr
                </span>
              </div>
              <p>
                It analyses the weather change according to the weather data
                from the middle of 1998 till the present day is logged at
                intervals of 10 minutes.
                <br />
                <a href="https://github.com/hyeyoon0808/wind_sensor_system">
                  Github Link
                </a>
              </p>
              <ul class="content-skills">
                <li>C++</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
