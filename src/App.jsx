/*
 props = read only properties that are shared between components.
         A parent component can send data to a child component.
         <Component key=value />
*/

import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="Francis" age={30} isStudent={true}/>
      <Student name="Alfonz" age={42} isStudent={false}/>
      <Student name="Angel" age={50} isStudent={false}/>
      <Student name="Justin" age={27} isStudent={true}/>
    </>
  );
}

export default App
