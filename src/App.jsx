import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";


function App() {
  const language = useSelector(state=>state.lang.lang)
  const { darkMode } = useSelector((state) => state.theme);
const {i18n}=useTranslation()
 
useEffect(()=>{
  i18n.changeLanguage(language)
},[language])
  return (
    <Layout>
      <div
        style={{
          background: darkMode ? "#000" : "#FFF",
          color: darkMode ? "#FFF" : "#000",
          width: "full",
          height: "120vh",
        }}
      >
        <Home />
      </div>
    </Layout>
  );
}

export default App;
