export default function Home() {
  //-----------------------------------------------------------------------------------------
  // return JSX
  //-----------------------------------------------------------------------------------------

  return (
    <div className="wrapper">
      <main className="information">
        <section className="information__self">
          <h2>Why front end development </h2>
          <p>Hi, im Arun. My interest for front end development </p>
        </section>
        <section className="information__skills">
          <h2> Skill set</h2>
          <div className="information__skills__right">
            <p>Html5</p>
            <p>css3</p>
            <p>sass</p>
            <p>Javascript</p>
          </div>
          <div className="information__skills__left">
            <p>React js</p>
            <p> git version control </p>
            <p> npm </p>
            <p> webpack</p>
          </div>
        </section>
      </main>
    </div>
  );
}
