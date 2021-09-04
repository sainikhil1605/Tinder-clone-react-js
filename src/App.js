
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards/Card';
import Chat from './Components/Chat/Chat';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Cards currUser='0' />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
