import React from "react";
import Header from "./Header.js";
import Carousel from "./Carousel.js";
import MovieList from "./MovieList.js";
import ListAds from "./ListAds.js";
import Footer from "./Footer.js";
export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <MovieList />
      <ListAds />
      <Footer />
    </div>
  );
}
