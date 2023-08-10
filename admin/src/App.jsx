import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { GlobalStyles, theme } from './styles/global.js'
import { ThemeProvider } from 'styled-components';
import axios from 'axios'
import HomeView from "./views/home/HomeView"
import CredentialsView from "./views/credentials/CredentialsView.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import MenuContainer from "./components/menu/MenuContainer.jsx";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    if (!user) {
      return <Navigate to='/login' />
    }

    return children
  }


  return (
    <>
      <GlobalStyles/>
      <header>
        <MenuContainer/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProtectedRoute><HomeView /></ProtectedRoute>} />
          <Route path="/login" element={<CredentialsView />} />
        </Routes>
      </main>
    </>
  )
}

export default App
