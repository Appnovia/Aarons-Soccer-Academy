import Navbar from "../components/navbar";
import Hero from "../components/hero";
import WhyAfa from "../components/why-afa";
import PlayerCategories from "../components/player-categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyAfa />
      <PlayerCategories />
    </>
  );
}
