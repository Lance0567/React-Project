import Food from "./Food.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx"

function App() {
  return(
    <> {/*This is called fragment so that you can return multiple*/}
      <Header/>
      <Footer/>
      <Food/>
    </>
  );
}

export default App
