import { VscGithubAlt } from "react-icons/vsc";

export default function Projects() {
// add links to github and deployed work
    return (
<section class="work">
    <article class="card" id="firstwork">
        <h5><a href="https://serinochloe.github.io/tummy-yummys/" target="_blank">Tummy Yummy's</a></h5>
        <a className="github" href="https://github.com/serinochloe/tummy-yummys"><VscGithubAlt id="worken" target="_blank"/></a>
    </article>
    <article class="card" id="work2">
        <h5><a href="https://lilpinc.github.io/Horiseon-Refactor/" target="_blank">SVG Logo Maker</a></h5>
        <a className="github" href="https://github.com/lilpinc/Horiseon-Refactor"><VscGithubAlt id="workto" target="_blank"/></a>
    </article>
    <article class="card" id="work3">
        <h5><a href="https://lilpinc.github.io/Weather-Dashboard/" target="_blank">Weather Dashboard</a></h5>
        <a className="github" href="https://github.com/lilpinc/Weather-Dashboard"><VscGithubAlt id="worktre" target="_blank"/></a>
    </article>
    <article class="card" id="work4">
        <h5><a href="https://lilpinc.github.io/Anatomy-Quiz/" target="_blank">Anatomy Quiz </a></h5>
        <a className="github" href="https://github.com/lilpinc/Anatomy-Quiz"><VscGithubAlt id="workfire" target="_blank"/></a>
    </article>
    <article class="card" id="work5">
        <h5><a href="https://lilpinc.github.io/Work-Day-Scheduler/" target="_blank">Work Day Scheduler</a></h5>
        <a className="github" href="https://github.com/lilpinc/Work-Day-Scheduler"><VscGithubAlt id="workfem" target="_blank"/></a>
    </article>
    <article class="card" id="work6">
        <h5><a href="https://lilpinc.github.io/Anna-Pincus-Portfolio/" target="_blank">Employee Tracker</a></h5>
        <a className="github" href="https://github.com/lilpinc/Anna-Pincus-Portfolio"><VscGithubAlt id="workseks" target="_blank"/></a>
    </article>
</section>
    )};