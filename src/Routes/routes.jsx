import React from 'react'
import { Routes, Route} from "react-router-dom"
import Register from "../Auth/RegisterAuth/register"

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Index