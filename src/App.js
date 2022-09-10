import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import UseCallback from "./components/UseCallback";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseMemo from "./components/UseMemo";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import UseStateObject from "./components/UseStateObject";
import UseEffectCleanUp from "./components/UseEffectCleanUp";
import UseRef1 from "./components/UseRef1";
// import Test from "./components/Test";
function App() {
 
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<UseState />}></Route>
        <Route exact path="/usestate" element={<UseState />}></Route>
        {/* <Route exact path="/test" element={<Test />}></Route> */}
        <Route exact path="/usestateObject" element={<UseStateObject />}></Route>
        <Route exact path="/useeffect" element={<UseEffect />}></Route>
        <Route exact path="/useEffectCleanUp" element={<UseEffectCleanUp />}></Route>
        <Route
          exact
          path="/uselayouteffect"
          element={<UseLayoutEffect />}
        ></Route>
        <Route exact path="/useref" element={<UseRef />}></Route>
        <Route exact path="/useref1" element={<UseRef1 />}></Route>
        <Route exact path="/usereducer" element={<UseReducer />}></Route>
        <Route exact path="/usememo" element={<UseMemo />}></Route>
        <Route exact path="/usecontext" element={<UseContext />}></Route>
        <Route exact path="/usecallback" element={<UseCallback />}></Route>
      </Routes>
    </>
  );
}

export default App;
