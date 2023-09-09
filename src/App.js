
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light')
  const [btntext,setbtnText]=useState('Enable Dark Mode')
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },1500); 
  }
  //whether dark mode is enabled or not
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
 const toggleMode=(cls)=>{
  removeBodyClasses(cls)
  console.log(cls)
  document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setMode('dark');
    // setbtnText('Enable Light Mode');
    document.body.style.backgroundColor='#0a2354';
    showAlert("Dark Mode has been enabled","Success");
    // document.title='TextUtils - Dark Mode';
  }
  else{
    setMode('light');
    // setbtnText('Enable Dark Mode');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been enabled","Success");
    // document.title='TextUtils - Light Mode';
  }
 }
  return (
    <>
  <Router> 

<Navbar title="TextUtils" mode={mode} btntext={btntext} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <div className="container my-3" > */}
<Switch>
<Route exact path="/TextUtils-React" render={()=>{
            return (
              <>
<TextForm showAlert={showAlert} heading="Try   TextUtils - Word Counter,Character Counter,Remove ExtraSpaces" mode={mode}/>
</>
            )
          }}>               
          </Route>
          {/* <Route exact path="/TextUtils-React">
          <TextForm showAlert={showAlert} heading="Try   TextUtils - Word Counter,Character Counter,Remove ExtraSpaces" mode={mode}/>
          </Route> */}
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try   TextUtils - Word Counter,Character Counter,Remove ExtraSpaces" mode={mode}/>
          </Route>
          
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
        </Switch>

{/* </div> */}
  </Router>
  </>
  );
}

export default App;
