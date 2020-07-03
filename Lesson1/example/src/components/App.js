import React from 'react';
import List from './list/List';

const users = [
  {
    id: "1",
    name: "Alex",
    age: 25
  },
  {
    id: "2",
    name: "Nikita",
    age: 27
  },
  {
    id: "3",
    name: "Oleg",
    age: 29
  },
  {
    id: "4",
    name: "Andrii",
    age: 31
  }
]

const App = () => {
  return (
    <div>
      <List users={users} />
    </div>
  );
}

export default App;
