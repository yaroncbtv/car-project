import './App.css';
import PersistentDrawerRight from './components/drawer';
import MainImage from './components/mainImage';
import { Search } from './components/search';
import { Admin } from './components/admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://www.loudwallpapers.com/wp-content/gallery/black-car/lovely-black-car-wallpaper-with-black-background.jpg',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route exact path="/">
            <PersistentDrawerRight />
            <MainImage post={mainFeaturedPost} />
            <Search />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
