import HomeSplashImage from "../Images/homepage.jpg";

const HomePage = () => {

  return (
    <div>
      <section className="hero">
        <img src={HomeSplashImage} alt="Necklace"></img>
      </section>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="subtitle">Welcome to</p>
          <p className="title">Shoppr</p>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
