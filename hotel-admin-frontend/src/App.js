import React,{ useEffect, createContext, useReducer, useContext } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import  Home from './pages/Home';
import  Signup  from './pages/Signup';
import  Login  from './pages/Login';
import { initial_state, reducer } from "./Reducers/userReducer";
import "./App.css";

export const userContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { userState, dispatch } = useContext(userContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/signup");
    }
  }, []); 

  return (
    <Switch>
      <Route exact path='/'><Home/></Route>
      <Route path='/signup'><Signup/></Route>
      <Route path='/login'><Login/></Route>
    </Switch>
  );
};

const App = () => {
  const [userState, dispatch] = useReducer(reducer, initial_state);
  return (
    <userContext.Provider value={{ userState, dispatch }}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routing />
      </BrowserRouter>
    </userContext.Provider>
  );
};

export default App;
