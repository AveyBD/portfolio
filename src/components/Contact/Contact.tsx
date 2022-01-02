import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import telegramIcon from "../../assets/telegram.png"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Feel Free to Contact</h2>
        <p>If you think I can help you on anything feel free to contact with me. </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="#contact">hello [a] debashish.dev</a>
        </div>
        <div>
          <img src={telegramIcon} alt="Telegram" />
          <a href="https://t.me/AveyOnion">Chat on Telegram</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}