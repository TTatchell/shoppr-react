import HomeSplashImage from "../Images/homepage.jpg";

const HomePage = () => {

  return (
    <div>
      <section class="hero">
        <img src={HomeSplashImage}></img>
      </section>
      <section class="hero is-info">
        <div class="hero-body">
          <p class="title">Hey there,</p>
          <p class="subtitle">Welcome to Shoppr</p>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
