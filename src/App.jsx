import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import foto1 from "./images/section6-img.png";
import icon1 from "./images/location.svg";
import icon2 from "./images/tel.svg";
import icon3 from "./images/time.svg";
import icon4 from "./images/email.svg";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main
        foto1={foto1}
        icon1={icon1}
        icon2={icon2}
        icon3={icon3}
        icon4={icon4}
      />
      <Footer />
    </>
  );
}

export default App;
