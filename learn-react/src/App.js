// import React from "react";
// import "./App.css";
// import Counter from "./Counter";
// import Employee from "./Employee";

// const employeeInfo = [
//   {
//     firstName: "Jack",
//     lastName: "A",
//     age: "15",
//   },
//   {
//     firstName: "Steph",
//     lastName: "B",
//     age: "16",
//   },
//   {
//     firstName: "George",
//     lastName: "C",
//     age: "17",
//   },
//   {
//     firstName: "Anthony",
//     lastName: "D",
//     age: "12",
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Company Directory</h1>
//         {employeeInfo.map((employee) => {
//           const { firstName, lastName, age } = employee;
//           return (
//             <Employee firstName={firstName} lastName={lastName} age={age} />
//           );
//         })}

//         {/* <Employee firstname="Jack" lastname="A" age="15"/>
//       <Employee firstname="Steph" lastname="B" age="16"/>
//       <Employee firstname="George" lastname="C" age="17"/>
//       <Employee firstname="Anthony" lastname="D" age="12"/> */}
//       </header>
//     </div>
//   );
// }

// export default App;

// DESTRUCTURING IN REACT
// import React from "react";
// import "./App.css";

// const employee = {
//   id: "ABC",
//   name: "Anthony",
//   Salary: "$10",
// };

// export default function App() {
//   const { id, name, Salary } = employee;
//   return (
//     <div className="App">
//       <h2>{name}</h2>
//       <h2>{id}</h2>
//     </div>
//   );
// }
//  THE OUTPUT WILL BE "Anthony for line 66 and ABC for line 67".
//  This is the most basic way to destrcture in React.

// How to destructure Nested Objects

// const employee = {
//   id: "ABC",
//   name: "Anthony",
//   Salary: "$10",
//   address: {
//     street: "210 Washington Street",
//     country: "Canada",
//     province: "Ontorio",
//   },
// };

// export default function App() {
//   const { name, id, address } = employee;
//   const { street, country, province } = address;
//   return (
//     <div className="App">
//       <h2>{name}</h2>
//       <h2>{id}</h2>
//       <h2>
//         {address.street}, {address.country} {country.province}
//       </h2>
//     </div>
//   );
// }

// Line 95 can also be reprsented as :
// <h2>{`${street}, ${country} ${province}`}</h2>
// since address has been destructured and you can equally do renaming of objects.

// ANOTHER WAY TO DO this, IS :
// export default function App() {
//  const { name,
//   id,
//   address:{
//     street;
//     country;
//     province,
//   }
// } = employee;

// and it will output same thing, this can be complete depending on data from the backend(database)

// Mapping and Looping In React.
// This is the simplest application of the map function.:

// import React from "react";
// import "./App.css";
// const employees = ["Anthony", "Kelvin", "Stephaine", "George"];
// export default function App() {
//   return (
//     <div className="App">
//       {employees.map((employees) => {
//         return <h1>{employees}</h1>;
//       })}
//     </div>
//   );
// }

// lets say you have an array of strings where each employee is an Object.

// import React from "react";
// import "./App.css";

// const employees = [
//   {
//     firstName: "Jack",
//     lastName: "ABC",
//   },
//   {
//     firstName: "Steph",
//     lastName: "BCD",
//   },
//   {
//     firstName: "George",
//     lastName: "CDE",
//   },
//   {
//     firstName: "Anthony",
//     lastName: "DEF",
//   },
// ];

// export default function App() {
//   return (
//     <div className="App">
//       {employees.map((employees) => (
//         <h6>{`Name: ${employees.firstName} ${employees.lastName}`}</h6>
//       ))}
//     </div>
//   );
// }

// SPREAD OPERATOR
// import React from 'react';
// import './App.css';

// export default function App() {
//   const arr1 = [0, 1, 2];
//   const arr2 = [3, 4, 5];
//   const arr3 = [...arr1, ...arr2];
//   console.log(arr3);
//   return (
//     <div className='App'>
//       <h1>Hello Again</h1>
//     </div>
//   );
// }

// // used with Employee.js Component
// import React from 'react';
// import Employee from './Employee';
// import "./App.css"

// const employee = [
//   {
//     name: "Anthony",
//     id: "ABC"
//   }
// ]

// export default function App() {
//   const firstEmployee = employee[0];
//   return (
//     <div className='App'>
//       <Employee {...firstEmployee} />
//     </div>
//   );
// };

// // OUTPUT: Name: Anthony ID: ABC 

// CONDITIONAL RENDERING IN REACT 
// import React from 'react';
// import './App.css';

// export default function App() {
//     const employees = ["Anthony","George"]
//     return (
//         <div className='App'>
//             {employees && employees.length > 0 && (
//                 <div>
//                     <h1> Employee List:</h1>
//                     {employees.map((employee) => (
//                         <h4>{employee}</h4>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// };

// // OUTPUT 
// // Employee List:
// Anthony
// George

// Example 2 
// import React, { useState } from "react";
// import './App.css';

// export default function App () {
// const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         <div className="App">
//         <h1>Welcome to the App.</h1>
//         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//             {isLoggedIn ? "Log Out" : "Log In"}
//         </button>
//         {/* it displays this when am logged in  */}
//         {isLoggedIn ? (
//             <h1>Hello, Nnanna</h1>
//         ):(
//             <div>
//                 {/* it displays this when am logged out or when i click on log out  */}
//             <h2>Please log in to Continue</h2> 
//             </div>
//         )}
//         </div>
//     )
// }

// LIFECYCLE OF A REACT COMPONENT 
