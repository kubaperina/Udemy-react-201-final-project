import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Home is here in HERO section" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              debitis blanditiis saepe corporis deserunt omnis recusandae
              perspiciatis mollitia commodi. Magni quia neque delectus soluta
              adipisci aliquam, esse doloribus dolor libero.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
