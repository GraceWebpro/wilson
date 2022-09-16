import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'
import Music from './components/music/Music'
import News from './components/news/News'
import NewsDetails from './components/news/NewsDetails'

import Video from './components/video/Video'
import AdminLogin from './components/admin/AdminLogin';


function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Switch>
          <Route exact path='/music' component={Music} />
        </Switch>
        <Switch>
          <Route exact path='/news' component={News} />
        </Switch>
        <Switch>
          <Route exact path='/video' component={Video} />
        </Switch>
        <Switch>
          <Route exact path='/login' component={AdminLogin} />
        </Switch>
        <Switch>
          <Route exact path='/news/:id' component={NewsDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
