import Ipod from './Ipod'
function App() {
  return (
    <div className="App"  style={style.app}>
         <Ipod/> 
    </div>
  );
}

const style = {
  app: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    
  }
}

export default App;
