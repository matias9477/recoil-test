import reactLogo from "./assets/react.svg";
import recoilLogo from "/recoil.svg";
import "./App.css";
import { PostList } from "./components/PostList";
import { PostCreator } from "./components/PostCreator";

function App() {
  return (
    <>
      <div>
        <a href="https://recoiljs.org/" target="_blank">
          <img src={recoilLogo} className="logo" alt="Recoil logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <PostCreator />
      <PostList />
    </>
  );
}

export default App;
