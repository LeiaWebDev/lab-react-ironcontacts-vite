import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json"
import {FaTrophy} from 'react-icons/fa'

const fiveContacts = contacts.slice(0, 5)
const otherContacts = contacts.slice(5)


function App() {
  const [contacts, setContacts] = useState(fiveContacts)
  
  function addRandomContacts() {
    const randomContacts = otherContacts[Math.floor(Math.random() * contacts.length)]
    
    const copy = [...contacts]
    copy.push(randomContacts)
    setContacts(copy)
    // setContacts([...contacts, randomContacts])
  }
  
  // function sortActorsByName(a,b){
  //   return a.contacts.name.localeCompare(b.contacts.name)
  // }

  function sortByName(){
    // const copy = copyArrayContacts(contacts)
    const copy = [...contacts]
    copy.sort(
      (a,b) => a.name.localeCompare(b.name)
    )
    
    setContacts(copy)
  }

// function sortActorsByPopularity (a,b){
//   return a.contacts.popularity - b.contacts.popularity
// }

  function sortByPopularity(){
    const copy = [...contacts]
    copy.sort(
      (a, b) => b.popularity - a.popularity
    )
    setContacts(copy)
  }

  function buttonDelete(id){
    const removeActor = contacts.filter((contacts) => contacts.id !== id)
    setContacts(removeActor)
  }


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
    

      <button onClick={addRandomContacts}>Add random contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>

      {/* {contacts.map((contacts)=> {
        return (
          
          <div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><img src={contacts.pictureUrl}/></td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
                <td>{contacts.wonOscar ? <FaTrophy/> : null}</td>
                <td>{contacts.wonEmmy ? <FaTrophy/> : null}</td>
                <td><button onClick={() => buttonDelete(contacts.id)}>Delete</button></td>
              </tr>
            </tbody>
          </table>
          </div>
        )
      })} */}

      <div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
              </tr>
            </thead>

            {contacts.map((contacts)=> {
              return (
          
              <tbody>
                <tr>
                  <td><img src={contacts.pictureUrl}/></td>
                  <td>{contacts.name}</td>
                  <td>{contacts.popularity}</td>
                  <td>{contacts.wonOscar ? <FaTrophy/> : null}</td>
                  <td>{contacts.wonEmmy ? <FaTrophy/> : null}</td>
                  <td><button onClick={() => buttonDelete(contacts.id)}>Delete</button></td>
                </tr>
                </tbody>
              )
            })}
          </table>
        </div>
        
         

    </div>
    
  );
}

export default App;
