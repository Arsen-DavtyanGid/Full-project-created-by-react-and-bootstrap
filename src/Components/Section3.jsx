import Section3section from "./Section3section";

function Section3() {
  return (
    <section className="Section3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section3-text">ЧЕМ МЫ ЗАНИМАЕМСЯ?</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Section3section />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Section3section />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Section3section />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Section3section />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Section3section />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <Section3section />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
