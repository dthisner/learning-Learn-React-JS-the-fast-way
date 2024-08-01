import "./App.css";
import "./Styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <footer className="footer">
        <p className="footer">Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
