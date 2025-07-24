import Header from "../../components/header";
import HeroContainer from "../../components/heroContainer";
import Services from "../../components/services";
import AboutContainer from "../../components/aboutContainer";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

function HomePage() {
  return (
    <div className="page_container">
      <Header />
      <HeroContainer />
      <Services />
      <AboutContainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
