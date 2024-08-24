import Bienvenida from "./_components/Bienvenida";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Recursos from "./_components/Recursos";
import Temas from "./_components/Temas";

const LandingPage = () => {
  return (
    <div className="landing">
      <Header />
      <Bienvenida />
      <Temas />
      <Recursos />
      <Footer />
    </div>
  );
};

export default LandingPage;