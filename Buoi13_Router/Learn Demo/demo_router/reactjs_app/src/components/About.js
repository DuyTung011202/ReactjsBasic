import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <main>
        <h1>This is AboutPage</h1>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
export default About;
