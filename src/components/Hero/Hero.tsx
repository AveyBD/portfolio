import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, This is</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1*1000}>
          <h1>Debashish D. Dev</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h3>Full Stack Web Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <p className="small-resume">I am a computer engineer who suddenly fall in love with Web Development.</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.1*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Contact Me</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.1*1000}>
          <img src={Illustration} alt="Debashish D. Dev"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}