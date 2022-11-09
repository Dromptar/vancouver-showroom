import './app.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/darkMode';

//Components
import Navbar from './Navbar/Navbar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
 
  return (
    <>

      <DarkModeProvider props="Hello there!">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
      
    
    </>  
  )
}


export default App