import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="md:px-10">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
