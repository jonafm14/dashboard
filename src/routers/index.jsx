import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Welcome } from '../pages/Welcome'
import { MainLayout } from '../components/layouts'
import { DepartmentPage, DistrictPage, PaymentPage, ProvincePage, UsersTable } from '../pages'
import { ModulesPage } from '../pages/ModulesPage'
import { ChannelsPage } from '../pages/ChannelsPage'
import { SpecificationsPage } from '../pages/SpecificationsPage'

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
            path='/department'
            element={
            <MainLayout>
              <DepartmentPage
              />
            </MainLayout>
        }
          />
          <Route
            path='/province'
            element={
            <MainLayout>
              <ProvincePage
              />
            </MainLayout>
        }
          />
          <Route
            path='/district'
            element={
            <MainLayout>
              <DistrictPage
              />
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
            path='/channels'
            element={
            <MainLayout>
              <ChannelsPage
              />
            </MainLayout>
        }
          />
          <Route
            path='/specifications'
            element={
            <MainLayout>
              <SpecificationsPage
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
            </Routes>
        </BrowserRouter>
  )
}
