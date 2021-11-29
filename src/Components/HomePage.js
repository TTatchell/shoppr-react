import React, { useEffect } from 'react';

import HomeSplashImage from "../Images/homepage.jpg";

const HomePage = () => {

  useEffect(() => {
    fetch('http://127.0.0.1:3000/categories')
      .then(response => response.json())
      .then(data => console.log(data));

  });


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
