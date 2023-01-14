import { useState } from 'react';
// import Counter from './components/Counter';
// import Timer from './components/Timer';
// import TimerTwo from './components/TimerTwo';
// import TimerThree from './components/TimerThree';
// import TimerFour from './components/TimerFour';
import IronbnbList from './components/IronbnbList';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  const [show, setShow] = useState(true);
//  console.log('spotify key', process.env.REACT_APP_SPOTIFY_KEY)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        { show ? "Hide" : "Show"}
      </button>
      {/* {show && <Counter />} */}
      {/* <Timer /> */}
      {/* {show && <TimerTwo />} */}
      {/* {show && <TimerThree />} */}
      {/* {show && <TimerFour />} */}
      <IronbnbList />
    </div>
  );
}
 
export default App;
