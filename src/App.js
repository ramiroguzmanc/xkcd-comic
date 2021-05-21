import "./sass/styles.scss";
import Header from "./components/Header";
import Comic from "./components/Comic";

function App() {
  return (
    <div className="gridContainer">
      <Header />
      <Comic />
    </div>
  );
}

export default App;
