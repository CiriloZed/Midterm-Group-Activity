
import Header from "./components/header";
import AboutSection from "./components/about";
import Popular from "./components/popular";
import Products from "./components/products";
const DefaultPage = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <Popular/>
      <Products/>
      </>
  )
};

export default DefaultPage;
