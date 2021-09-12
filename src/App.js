import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlePage from './Pages/ArticlePage';
import NavBar from './NavBar';
import './App.css';
import ArticlesListPage from './Pages/ArticlesListPage';
import NotFoundPage from './Pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component= {ArticlesListPage}/>
            <Route path="/article/:name" component={ArticlePage} />
            <Route  component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
