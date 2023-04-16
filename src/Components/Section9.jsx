import Section9section from "./Section9section";

function Section9(props) {
  return (
    <section className="Section9">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section9-text">КОНТАКТЫ</div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="section9-full-content">
              <Section9section icon={props.icon1} text="АДРЕС:" />
              <div className="section9-textt">НЕВСКИЙ ПРОСПЕКТ,</div>
              <div className="section9-textt"> ОФИС 140-142</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="section9-full-content">
              <Section9section icon={props.icon2} text="ТЕЛЕФОН:" />
              <div className="section9-textt">8 (812) 111-22-33</div>
              <div className="section9-textt">8 (812) 111-22-33</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="section9-full-content">
              <Section9section icon={props.icon3} text="ВРЕМЯ РАБОТЫ:" />
              <div className="section9-textt">ПН-СБ</div>
              <div className="section9-textt">10:00 - 20:00</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="section9-full-content">
              <Section9section icon={props.icon4} text="E-MAIL:" />
              <div className="section9-info">INFO@VIP.RU</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section9;
