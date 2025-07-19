import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../page/inicio/App";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/Login" />
        <Route path="/Register" /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;