import { Routes, Route }  from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import SignIn from './routes/sign-in/sign-in.component.jsx';


const Shop =()=>{
  return(
    <h1>I am the Shop Page</h1>
  );
};


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='signIn' element={<SignIn />} />
      </Route>
      
    </Routes>
  );
}

export default App;
