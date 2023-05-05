import Hero from "../components/hero/Hero";
import HomeSectionOne from "../components/home-section-one/HomeSectionOne";
import HomeSectionThree from "../components/home-section-three/HomeSectionThree";
import HomeSectionTwo from "../components/home-section-two/HomeSectionTwo";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Hero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <Footer />
    </>
  );
}

export default Home;
