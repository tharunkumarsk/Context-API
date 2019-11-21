import React from 'react';
import { render } from 'react-dom';
import GrandChild from './GrandChild';
import DataContextProvider from './DataContext';


function Parent () {
  return (
    <div>
      <h1>Parent</h1>
      <Child/>
    </div>
  );
}

function Child () {
  return (
    <div>
      <h1>Child</h1>
      <DataContextProvider>
      <GrandChild/>
      </DataContextProvider>
    </div>
  );
}

class App extends React.Component {
  render() {
   
    return (
            <Parent />
      
    );
  }
}

render(<App />, document.getElementById('App'));