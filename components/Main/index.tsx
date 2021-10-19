import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo3.png";

import { Container, Left, Right, Info, Form } from "./styles";

function Main({ handleLogin }) {
  console.log("Salve");

  console.log(handleLogin);

  return (
    <Container>
      <Left>
        <Info>
          <h2>Todo mundo pode ser cancelado</h2>
          <span>
            Descubra o motivo porque vão te cancelar, se tiver coragem !!!
          </span>
        </Info>
      </Left>
      <Right>
        <Form>
          <Image
            src={logo}
            alt="Fui cancelado"
            height={199}
            width={473}
            className="logo"
          />
          <button className="twitter" onClick={handleLogin}>
            <div className="twitter__text">
              <FaTwitter />
              <span>Entrar com o Twitter</span>
            </div>
          </button>
          <div className="divider">
            <div className="line" />
            <span className="text">ou entre com um nome</span>
            <div className="line" />
          </div>
          <input type="text" placeholder="Digite o seu nome" />
          <button className="button">
            <div className="button__text">
              <FiLogIn />
              <span>Entrar com nome</span>
            </div>
          </button>
        </Form>
      </Right>
    </Container>
  );
}

export default Main;
