


import React from "react";
import Header from "./components/Layout/Navbar";
import SectionOne from "./pages/Home/SectionOne";
import SectionTwo from "./pages/Home/SectionTwo";
import SectionThree from "./pages/Home/SectionThree";
import SectionSeven from "./pages/Home/SectionSeven";
import NewsLetter from "./pages/Home/NewsLetter";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionSeven/>
      <NewsLetter/>
    </div>
  );
};

export default App;
