import Hero from "../components/hero/Hero";
import HomeSectionOne from "../components/home-section-one/HomeSectionOne";
import HomeSectionThree from "../components/home-section-three/HomeSectionThree";
import HomeSectionTwo from "../components/home-section-two/HomeSectionTwo";
import Footer from "../components/footer/Footer";
import HomeSectionFour from "../components/home-section-four/HomeSectionFour";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn" }}
    >
      <Hero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <Footer />
    </motion.div>
  );
}

export default Home;
