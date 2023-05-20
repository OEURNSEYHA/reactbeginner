import React from 'react'
import Data from './Data'
function List_rendering() {
    const Person = [
        {
            name:'seyha',
            sex :'male',
            skill:'Front-End Developer '
        }
    ]
    const PersonList = Person.map((person,i)=> <Data person={person}/>)
  return (
        <div> { PersonList } </div>
  )
}

export default List_rendering;