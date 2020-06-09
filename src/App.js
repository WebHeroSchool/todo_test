import React from 'react';

const ItemList = () => (<ul>
  <li>The first task</li>
  <li>The second task</li>
  <li>The third task</li>
</ul>)
const App = () => (<div>
  <h1>My item list:</h1>
  <ItemList /></div>);

  export default App;