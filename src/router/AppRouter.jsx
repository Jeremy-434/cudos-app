import { Route, Routes } from 'react-router-dom';
import { SearchNavbar } from '../components';
import { SideMenu } from '../components';
import { DashBoardPage, LoginPage } from '../pages';
import { ContainerLayout } from './layout/ContainerLayout';
import '.././assets/css/ContainerLayout.css'
import { GeneralProvider } from '../context/general/GeneralProvider';

export const AppRouter = () => {
  return (
    <GeneralProvider>
      <SearchNavbar />
      <SideMenu />
      <ContainerLayout>
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ContainerLayout>
    </GeneralProvider>
  )
}
