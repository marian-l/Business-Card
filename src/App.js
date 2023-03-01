import './App.css';
import Main from './components/Main';
import Picture from './components/Picture';
import Socials from './components/Socials';
import Email from './components/Email';

// check if entries are in viewport and categorize them accordingly
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // if the entry is intersecting the viewport, we add it to a class called show
    } else {
      entry.target.classList.remove('show'); // remove the item so the animation will replay at repeated entrance of viewport
    }
  });
});



function App() {
  return (
    <div className="App">
      <Picture />
      <Main />
      <Email />
      <Socials />
    </div>
  );
}

export default App;
