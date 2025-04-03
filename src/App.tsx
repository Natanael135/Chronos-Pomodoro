import "./styles/theme.css";
import "./styles/global.css";
import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import Input from "./components/Input";
import Cycles from "./components/Cycles";
import Button from "./components/Button";
import { PlayCircleIcon } from "lucide-react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form action="" className="form">
          <div className="formRow">
            <Input
              id="123"
              type="text"
              labelText="Teste"
              placeholder="Digite Algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <Button icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
