import logo from './logo.svg';
import './App.css';
import React from 'react';//optional
import "./App.css"
import List from "./components/List";
import ListItem from './components/ListItem';
import ListItem1 from './components/ListItem1';
import ListItem2 from './components/ListItem2';
import MyBook from './components/MyBook';
function App() {
  const hobbies = ['reading', 'traveling', 'painting', 'skiing'];
  const purchases = ['shoes', 'bag', 'hat', 'shirt'];
  const bookSeries =[
    {
      name: "GOT",
      author: "G.Martin"
    },
    {
      name: "LOTR",
      author: "J.R.Tolkien"
    },
    {
      name: "KC",
      author: "P.Rothfuss"
    },
    {
      name: "HP",
      author: "J.K.Rowling"
    },
    
  ]
  return (
    <div>
    
      <ul>
    {/*   {hobbies.map(hobby =>{
        return <ListItem item={hobby}/> 
      })} */}
      {/* {purchases.map(pursh=>{
        return <ListItem1 items={pursh}/>
      })} */}
      {
      purchases
      .filter(purchase => purchase.length >3)
      .map(purchase =>(
         <ListItem1 item={purchase}/>
      ))}
     
        {/* <ListItem firstBook={hobbies[0]}/>
        <ListItem firstBook={hobbies[1]}/>
        <ListItem firstBook={hobbies[2]}/> */}
        {
          bookSeries.map(book =>{
            return <ListItem2 items1={book}/>
          })
        }
                 
      </ul>
      <h2>My Favorite book series are:</h2>
      <ul>
        {
          bookSeries.map(book1 =>{
            return <MyBook item3={book1}/>
          })

        }

      </ul>


    </div>
  );
}

export default App;

//1.create a List component(import&export) that will have ul and li's with hobbies
/* reading
traveling
painting
skiing
 */
//2.create a ListItem1 component(import&export) that will have ul and li with purchase but display only those that have more than 3 chars
/*
my purchases are
shoes
shirt 
 */

//create a ListItem1 component(import&export) that will have  li with bookname and author
/* Example
my favorite book series are:
GOT by G.Martin
...
...
...
 */