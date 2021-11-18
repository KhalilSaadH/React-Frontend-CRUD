
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
            <HeaderComponent/>
              <div className="container">
                <Switch>
                  <Route path="/" exact component={ListEmployeeComponent}/>
                  <Route path="/React-Frontend-CRUD" exact component={ListEmployeeComponent}/>
                  <Route path="/React-Frontend-CRUD/employees" component={ListEmployeeComponent}/>
                  <Route path="/React-Frontend-CRUD/add-employee" component={CreateEmployeeComponent}/>
                  <Route path="/React-Frontend-CRUD/update-employee/:id" component={UpdateEmployeeComponent}/>
                  <Route path="/React-Frontend-CRUD/view-employee/:id" component={ViewEmployeeComponent}/>
                  
                </Switch>
              </div>
            <FooterComponent/>
        </Router>
    </div>
   
  );
}

export default App;
