import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AppPidIdea from './app-pid-idea/AppPidIdea';
import { Provider } from './app-pid-idea/contexts/topics';
import Dashboard from './app-pid-idea/comp/pages/dashboard/dashboard';

function App() {
  return (
    <div className="main-screen">
      <Provider>
          <AppPidIdea/>
          
      </Provider>
      
    </div>



    
  );
}

export default App;
