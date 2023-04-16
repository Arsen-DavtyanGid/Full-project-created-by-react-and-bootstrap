import Section7section from "./Section7section";

function Section7() {
  return (
    <section className="Section7">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section7-text">отзывы о работе с нами</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Section7section />
            <div className="section7-footer-text">
              Иванов Иван<span>, ООО “Газпром-Арена”</span>
            </div>
          </div>
          <div className="col-lg-4">
            <Section7section />
            <div className="section7-footer-text">
              Иванов Иван<span>, ООО “Газпром-Арена”</span>
            </div>
          </div>
          <div className="col-lg-4">
            <Section7section />
            <div className="section7-footer-text">
              Иванов Иван<span>, ООО “Газпром-Арена”</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section7;
