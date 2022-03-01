//import logo from './logo.svg';
import './App.css';
import contactsArray from './contacts.json'
import {useState} from 'react'

function App() {
  
  const [contacts, setContacts] = useState(contactsArray.slice(0,5))
  // const fiveContacts = contactsArray.slice(0,5)
  console.log(contacts)

  
  function AddRandom (){
    let randomFam = contactsArray[Math.floor(Math.random()*(contactsArray.length))]
    if(contacts.includes(randomFam)){AddRandom()}
    else{setContacts(contacts.concat(randomFam))}
  }






  function sortName(){
   return setContacts(contacts.map(con=>con).sort((a,b) => (a.name> b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
    
  }
  function sortPop(){
    
   return setContacts(contacts.map(con=>con).sort((a,b) => (a.popularity> b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0)))
    
  }

  function deleteContact(id){
 //const delCont = contacts.indexOf(id)
  console.log(contacts.indexOf(id));

   return setContacts(contacts.filter((elem)=>{
     return elem.id !== id
   }))
  }

  
 
return (
  <div>
  <h1>IronContacts</h1>
  {contacts.length < contactsArray.length && <button onClick={AddRandom}>Add random contact</button>}
  <button onClick={sortName}>Sort by name</button>
  <button onClick={sortPop}>Sort by popularity</button>
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
  {contacts.map((contact)=>{
return (
  <tr key={contact.id}>
    <td><img src={contact.pictureUrl} alt="pic" width="135"/></td>
    <td>{contact.name}</td>
    <td>{contact.popularity}</td>
    {contact.wonOscar && <td>🏆</td>}
    {!contact.wonOscar && <td> </td>}
    {contact.wonEmmy && <td></td>}
    {!contact.wonEmmy && <td> </td>}
   <td><button onClick={()=>deleteContact(contact.id)}>Delete</button></td>
    </tr>
)
}
)
}
  </tbody>
</table>
</div>
)}

export default App;
