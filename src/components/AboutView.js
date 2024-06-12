import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us is here in HERO section" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              debitis blanditiis saepe corporis deserunt omnis recusandae
              perspiciatis mollitia commodi. Magni quia neque delectus soluta
              adipisci aliquam, esse doloribus dolor libero. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. A assumenda porro
              reprehenderit, laborum omnis perspiciatis nesciunt natus eligendi
              eum consectetur velit ducimus blanditiis, nihil voluptatem earum
              ut nobis cumque asperiores.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
