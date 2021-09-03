import React from 'react';
import ButtonAppBar from "./Components/ButtonAppBar";
import { Container } from './Components/Container';


const App = () => {
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
 

  return (
    <div >
      <ButtonAppBar/>
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
    
  );
  
}

export default App
