import React from 'react';
import Counter from './counter/Counter'
import NewElem from './newElem/NewElem';

const data = [1, 2, 3, 4, 5]


const App = () => {
  return (
    <div>
      <h1>Lesson1</h1>
      <Counter data={data} user={{name: "Alex", age: 25}}/>
      <NewElem text={"text"} />
    </div>
  );
}

export default App;
