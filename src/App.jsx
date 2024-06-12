/*
 propTypes = a mechanism that ensures that the passed value
         is of the correct datatype.
         age: PropTypes.number
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
