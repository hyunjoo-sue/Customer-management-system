import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'Jone Doe1',
  'birthday':'1751212',
  'gender':'male',
  'job':'student'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'Jone Doe2',
  'birthday':'1751212',
  'gender':'male',
  'job':'student'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'Jone Doe3',
  'birthday':'1751212',
  'gender':'male',
  'job':'student'
},

]



function App() {
  return (
    <div>
      {
        customers.map((c) => {
          return (
            <Customer
              key={c.id}      // must use
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
