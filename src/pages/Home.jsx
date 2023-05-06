import Hero from "../components/hero/Hero";
import HomeSectionOne from "../components/home-section-one/HomeSectionOne";
import HomeSectionThree from "../components/home-section-three/HomeSectionThree";
import HomeSectionTwo from "../components/home-section-two/HomeSectionTwo";
import Footer from "../components/footer/Footer";
import HomeSectionFour from "../components/home-section-four/HomeSectionFour";

function Home() {
  return (
    <>
      <Hero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <Footer />
    </>
  );
}

export default Home;
