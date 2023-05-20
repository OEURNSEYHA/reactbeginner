import React from 'react'

function Data({person}) {
  return (
    <div>
        <h1>
            I am {person.name} {person.sex} my skill {person.skill}
        </h1>
    </div>
  )
}

export default Data