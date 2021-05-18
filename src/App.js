import './App.css';
import PersistentDrawerRight from './components/drawer';
import MainImage from './components/mainImage';
import { Search } from './components/search';

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
      <PersistentDrawerRight/>
      <MainImage post={mainFeaturedPost}/>
      <Search/>
    </div>
  );
}

export default App;
