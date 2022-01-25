export default function Home() {
  //-----------------------------------------------------------------------------------------
  // return JSX
  //-----------------------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <main className="information">
        <section className="information__self">
          <h2> Front end developer </h2>
          <h3 style={{ margin: "20px" }}>Welcome!</h3>
          <p style={{ margin: "20px", fontSize: "1.2rem" }}>
            Hi, Im Arun. Im interested in front end development. Feel free to
            checkout my portfolio,<br></br> this is just a small case of
            projects that I have undertaken in my free time and be sure to get
            in touch!
          </p>
        </section>
        <section className="information__skills">
          <h2> Skill set</h2>
          <div className="information__skills__right">
            <p>Html5</p>
            <p>Css3</p>
            <p>Sass</p>
            <p>Javascript</p>
          </div>
          <div className="information__skills__left">
            <p>React js</p>
            <p> git version control </p>
            <p> npm </p>
            <p> Webpack</p>
            <p>Visual studio</p>
            <p>Windows</p>
            <p>Github</p>
            <p>Gitlab</p>
          </div>
        </section>
      </main>
    </div>
  );
}
