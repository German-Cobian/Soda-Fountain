import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './component/CakeContainer';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer Container />
      </div>
    </Provider>
  );
}

export default App;
