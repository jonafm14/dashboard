import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Welcome } from '../pages/Welcome'
import { MainLayout } from '../components/layouts'
import { PaymentPage, UsersTable, ModulesPage, ManagementsPage, LoginPage } from '../pages'
import { LocalitiesPage } from '../pages/LocalitiesPage'

export const Routers = () => {
  return (
        <BrowserRouter>
            <Routes>
            <Route
          path="/"
          element={<Navigate to="/start" />}
        />
          <Route
            path='/users'
            element={
            <MainLayout>
              <UsersTable
              />
            </MainLayout>
        }
          />
          <Route
            path='/localities'
            element={
            <MainLayout>
              <LocalitiesPage/>
            </MainLayout>
        }
          />
          <Route
            path='/modules'
            element={
            <MainLayout>
              <ModulesPage
              />
            </MainLayout>
        }
          />
          <Route
            path='/managements'
            element={
            <MainLayout>
              <ManagementsPage
              />
            </MainLayout>
        }
          />
          <Route
            path='/payments'
            element={
            <MainLayout>
              <PaymentPage
              />
            </MainLayout>
        }
          />
          <Route
            path="/start"
            element={
              <MainLayout>
                {''}
                <Welcome
                name={'admin'}
                />
                {''}
              </MainLayout>
          }
        />
        <Route
            path='/login'
            element={
             <LoginPage/>
        }
          />
            </Routes>
        </BrowserRouter>
  )
}
