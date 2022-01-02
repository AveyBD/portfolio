import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg"
import wordpressIcon from "../../assets/wordpress-icon.svg"
import awsIcon from "../../assets/amazon_aws-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function About(){
  return(
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>My name is Debashish D. Dev. I have completed my engineering on Computer Science in 2019.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>I started my journey with wordpress. I used to read a lots of book. I wanted to be a writer. I had a wordpress blog and always wanted to make the blog more beautifull. Thats how I've jummped into Web Development. </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>

          <p>I want to make the internet minimal and easy to use. I am a mern full stack developer. I write poem in JavaScript.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>I love to work with those tech:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={vueIcon} alt="Vue" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={mongodbIcon} alt="mongodb" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={awsIcon} alt="AWS" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={wordpressIcon} alt="Wordpress" />
          </ScrollAnimation>
          </div>
          
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>


        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src="https://raw.githubusercontent.com/AveyBD/portfolio/master/src/assets/img-min.jpg" alt="Debashish D. Dev" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
