import Header from "../../components/header";
import HeroContainer from "../../components/heroContainer";
import Services from "../../components/services";
import AboutContainer from "../../components/aboutContainer";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import PageContainer from "../../components/pageContainer";

function HomePage() {
  return (
    <PageContainer>
      <HeroContainer />
      <Services />
      <AboutContainer />
      <Contact />
      <Footer />
    </PageContainer>
  );
}

export default HomePage;
