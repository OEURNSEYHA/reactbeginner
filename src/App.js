import React from 'react'
import UserContainer from './redux/component/UserContainer'
import ItemContainer from './redux/component/ItemContainer'
import CakeContainer from './redux/component/CakeContainer.js'
import IceCreamContainer from './redux/component/IceCreamContainer.js'
function App() {
  return (
    <>
    
    <UserContainer/>
    <CakeContainer/>
    <IceCreamContainer/>
    <ItemContainer iceCream/>
    </>
  )
}

export default App