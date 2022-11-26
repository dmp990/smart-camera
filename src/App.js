import "./App.css";
import Detector from "./components/Detector";

function App() {
  return (
    <div id="app-container">
      <p id="enable-access-text">
        Please enable access to webcam if you haven't already
      </p>
      <Detector></Detector>
    </div>
  );
}

export default App;
