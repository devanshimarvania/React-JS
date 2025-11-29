import { useState } from 'react'

import FormExample from './component/FormExample'
import JSX from './component/JSX'
import LifecycleExample from './component/LifecycleExample'
import ListExample from './component/ListExample'
import PropsExample from './component/PropsExample'
import StateExample from './component/StateExample'
import ClassComponentExample from './component/ClassComponentExample'

import './App.css'

function App() {

  return (
    <>
      <FormExample />
      <hr />
      <JSX />
      <hr />
      <LifecycleExample />
      <hr />
      <ListExample />
      <hr />
      <PropsExample />
      <hr />
      <StateExample />
      <hr />
      <ClassComponentExample/>
    </>
  )
}

export default App
