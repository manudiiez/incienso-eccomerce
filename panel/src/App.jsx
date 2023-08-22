import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginContainer from './pages/login/LoginContainer'
import { GlobalStyles, theme } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { ProductProvider } from './context/ProductContext'
import FormProduct from './pages/formProduct/FormProduct'
import ProtectedRoute from './ProtectedRoute'
import OrdersContainer from './pages/orders/OrdersContainer'
import { OrderProvider } from './context/OrderContext'
import OrderContainer from './pages/order/OrderContainer'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          <ProductProvider>
          <OrderProvider>
            <main>
              <Routes>
                <Route path='/login' element={<LoginContainer />} />
                <Route path='/' element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } />
                <Route path='/add' element={
                  <ProtectedRoute>
                    <FormProduct />
                  </ProtectedRoute>
                } />
                <Route path='/update/:id' element={
                  <ProtectedRoute>
                    <FormProduct />
                  </ProtectedRoute>
                } />
                <Route path='/orders' element={
                  <ProtectedRoute>
                    <OrdersContainer />
                  </ProtectedRoute>
                } />
                <Route path='/order/:id' element={
                  <ProtectedRoute>
                    <OrderContainer />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
          </OrderProvider>
          </ProductProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
