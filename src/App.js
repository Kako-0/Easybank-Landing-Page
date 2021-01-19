import './App.css';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import WhyChoose from './components/WhyChoose';

function App() {
  return (
    <>
      <Header />
      <Home />
      <WhyChoose />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
