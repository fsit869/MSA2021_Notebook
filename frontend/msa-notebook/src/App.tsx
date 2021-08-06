import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         
//       </header>
//     </div>
//   );
// }

// export default App;

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <h1> My website </h1>
        <Button variant="contained" color="primary">Materials UI test</Button>
      </React.Fragment>
      
    )
  }
}

export default App;