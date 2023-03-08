import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Routes>
      <Topbar />
        
        <Route exact path="/" element={ <Homepage />}>
          {/* <Homepage /> */}
        </Route>
        <Route path="/posts" element={ <Homepage />}>
          {/* <Homepage /> */}
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id" element={ <Single />}>
          {/* <Single /> */}
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
       
    </Routes>
  );
}

export default App;