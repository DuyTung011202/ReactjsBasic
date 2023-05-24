import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h1>This is HomePage</h1>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default Home;
