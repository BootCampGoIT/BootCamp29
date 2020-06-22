import React from 'react';
import data from '../data';
import List from './list/List';

const getMesage = (message) => {
  console.log(`Hello! ${message}`)
} 

const App = () => {
  return (
    <>
      <List data={data} getMesage={getMesage} />
    </>
  );
}

// const props = {
//   data: data
// }

export default App;
