import React from 'react'
import { Routes, Route} from "react-router-dom"
import Register from "../Auth/RegisterAuth/register"
import Login from "../Auth/LoginAuth/Login"

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Index