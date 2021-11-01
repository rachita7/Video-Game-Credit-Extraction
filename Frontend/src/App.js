
// import Navbar from './Navbar';
// import Upload from './Upload';
// import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import Search from './Search';
// import GamePage from './GamePage';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <Switch>
//           <Route exact path="/">
//             <Upload />
//           </Route>
//           <Route path="/search">
//             <Search />
//           </Route>
//           <Route path="/gamePage">
//             <GamePage />
//           </Route>
//         </Switch>
//       </div>
//       <div id="placeholder">
//       </div>
//     </div>
//     </Router>
    
//   );
// }

// export default App;

import Navbar from './Navbar';
import Upload from './Upload';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Search from './Search';
import GamePage from './GamePage';
import InfoPage from './InfoPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Upload />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/Info">
          <InfoPage />
          </Route>
        </Switch>
      </div>
      <div id="placeholder">
      </div>
    </div>
    </Router>
    
  );
}

export default App;
