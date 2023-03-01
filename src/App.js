import './App.css';
import Main from './components/Main';
import Picture from './components/Picture';
import Socials from './components/Socials';
import Email from './components/Email';

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
