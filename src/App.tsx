import React from 'react';
import './App.scss';
import { AppHeader } from './Layout/AppHeader/AppHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeoplePage from './Pages/PeoplePage/PeoplePage';
import RebuildPage from './Pages/RebuildPage/RebuildPage';
import LinksPage from './Pages/LinksPage/LinksPage';

const APP_VERSION = 'Snowflake';

const HomePage = () => {
  const PAGE_NAME = 'HOME'
  return (
    <main>
      <h2>Hi! This is {PAGE_NAME} page.</h2>
    </main>
  );
};

// const ExpertisePage = () => {
//   const PAGE_NAME = 'EXPERTISE'
//   return (
//     <main>
//       <h2>Hi! This is {PAGE_NAME} page.</h2>
//     </main>
//   );
// };




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="expertise" element={<RebuildPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="links" element={<LinksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
