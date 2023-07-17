import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SearchNavbar } from '../components';
import { SideMenu } from '../components';
import { DashBoard } from '../pages';
import { ContainerLayout } from './layout/ContainerLayout';
import { Layout, Space } from 'antd';
import '.././assets/css/ContainerLayout.css'

const { Header, Sider, Content, Footer } = Layout;



export const AppRouter = () => {
  return (
    <div>
      <SearchNavbar />
      <SideMenu />
      <ContainerLayout>
        <Routes>
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </ContainerLayout>
    </div>
  )
}
