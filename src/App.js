
import './App.css';
// import "./Project"
import FirstCompenent from './Lesson1/FirstCompenent';
import ApiList from './Lesson3/ApiList';
import ApiTable from './Lesson3/ApiTable';
import FifthComp from './Lesson4/FifthComp';
import FirstComp from './Lesson4/FirstComp';
import FourthComp from './Lesson4/FourthComp';
import store from './Project/redux/store';
import ReachChildren from './Lesson4/ReachChildren';
import SecondComp from './Lesson4/SecondComp';
import ThirdComp from './Lesson4/ThirdComp';

import MyStore from './Lesson2/MyStore';
import './css.css';
import Shop from './Project/shop';
import { Provider } from 'react-redux';
import CartDetails from './Project/cartDetails';
import Navbar from "./Project/navbar";
import { BrowserRouter } from 'react-router-dom';



function App() {

  return (
    <>
      <div className="App">
        <div className="App-header">
          <Provider store={store}>
            <BrowserRouter>
            <Navbar></Navbar>
            {/* <Shop></Shop>
            <h1>cart</h1>

            <CartDetails></CartDetails> */}
            </BrowserRouter>
          </Provider></div>
          </div>
      {/* <img src={pic}></img>
      <h1>HELLO!!! what is your name??</h1>
      <FirstCompenent name="Ruti" > </FirstCompenent > */}
      {/* <ApiTable></ApiTable> */}
      {/* <ApiList></ApiList> */}
      {/* <ReachChildren><FirstComp></FirstComp><SecondComp></SecondComp><ThirdComp></ThirdComp><FourthComp></FourthComp><FifthComp></FifthComp></ReachChildren> */}
    </>

  );
}

export default App;
