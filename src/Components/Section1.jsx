import Section1section from "./Section1section";

function Section1() {
  return (
    <section className="Section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section1-text">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Section1section />
          </div>
          <div className="col-lg-4">
            <Section1section />
          </div>
          <div className="col-lg-4">
            <Section1section />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
