function Section9section(props) {
  return (
    <section className="Section9-cont">
      <div className="section9-content-img">
        <img src={props.icon} alt="icon" />
      </div>
      <div className="section9-content-text1">{props.text}</div>
    </section>
  );
}
export default Section9section;
