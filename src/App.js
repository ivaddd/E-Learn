import "./App.css";
import Body from "./Components/Layout/Body";
import Nav from "./Components/Layout/Navbar";
import Body2 from "./Components/Layout/body2";
import Body3 from "./Components/Layout/body3";

function App() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Nav />
      <Body />
      <Body2 />
      <Body3 />
    </div>
  );
}

export default App;
