import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './component/CakeContainer'
import IceCreamContainer from './component/IceCreamContainer'
import UserContainer from './component/UserContainer'

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
