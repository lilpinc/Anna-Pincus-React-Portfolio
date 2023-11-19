

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="title">Resume</h1>
      <section className="resumecontent">
        <p class="text-center mt-5">Download my <button className="resumebtn"><a className="resumelink" href="../../public/Anna-Britta-Pincus.pdf" download>Resume</a></button></p>
        <div className="liststyle">
          <article className="front-back">
            <p className="proficiencies">Front-end Proficiencies</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </article>
          <article className="front-back">
            <p className="proficiencies">Back-end Proficiencies</p>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>Rest</li>
              <li>GraphQL</li>
            </ul>
          </article>
        </div>
      </section>

    </div>
  );
}