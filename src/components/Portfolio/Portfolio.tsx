import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import info from '../../assets/info.svg';
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>Some of My Projects</h2>

      <div className="projects">

        <ScrollAnimation animateIn="fadeIn">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/AveyBD/valophone-client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Client" />
                </a>
                <a href="https://github.com/AveyBD/valophone-server" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Server" />
                </a>
                <a href="https://valophone.web.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Valophone Web Site" /> </a>
                <a href="https://valophone.web.app/" target="_blank" rel="noreferrer">
                  <img src={info} alt="Valophone Web Site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Manufacturer Website</h3>
              <p>Simple website with admin panel where admin can add product and take order of bulk quantity.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>ReactJS</li>
                <li>TailwindCSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="pulse">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/AveyBD/gadhop-client" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Client" />
                </a>
                <a href="https://github.com/AveyBD/gadhop-server" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Server" />
                </a>
                <a href="https://valophone.web.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Valophone Web Site" /> </a>
                <a href="https://gadhop.web.app/" target="_blank" rel="noreferrer">
                  <img src={info} alt="Valophone Web Site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Gadget Seller eCommerce</h3>
              <p>This website is made for single vendor seller. Where a shop owner can sell his own item and manage it.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>TailwindCSS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="headShake">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/AveyBD/freshway.com.bd" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Server" />
                </a>
                <a href="https://freshway.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Valophone Web Site" /> </a>
                <a href="https://freshway.netlify.app/" target="_blank" rel="noreferrer">
                  <img src={info} alt="Valophone Web Site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Freshway Website</h3>
              <p>A corporate website for Freshway Agro Tech company where Business can order farm product.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TailwindCSS</li>
                <li>ReactJS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  );
}