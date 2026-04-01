import About from "./components/About";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyJoin from "./components/WhyJoin";

const App = () => {
  return (
    <div className="bg-midnight text-orange-500">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <WhyJoin />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
