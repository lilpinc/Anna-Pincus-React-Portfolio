import Projects from './projects';
// import projects component to display all projects

export default function Portfolio() {
    return (
        <div className="portfolio">
            <h1 className="title">Portfolio</h1>
            <section className="main">
            <Projects />
            </section>
        </div>
    );
}

