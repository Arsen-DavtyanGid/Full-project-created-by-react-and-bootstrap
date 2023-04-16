import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

function Main(props) {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 foto={props.foto} />
      <Section5 />
      <Section6 foto1={props.foto1} />
      <Section7 />
      <Section8 />
      <Section9 icon1={props.icon1} icon2={props.icon2} icon3={props.icon3} icon4={props.icon4}/>
    </main>
  );
}
export default Main;
