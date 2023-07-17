import { Avatar, Button, Layout, Space } from 'antd';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { BellIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Search from 'antd/es/input/Search';
import '../../assets/css/SearchNavbar.css'

const { Header } = Layout;

export const SearchNavbar = () => {
  return (
    <Header className="Header">
      <Space className="Space">
        <Button className="Button" icon={<Bars3BottomLeftIcon className="Bars3BottomLeftIcon" />} />
        <Search className="Search" placeholder='Buscar...' />
      </Space>
      <Space>
        <Button className="Button" icon={<BellIcon className="BellIcon" />} />
        <Button className="Button" icon={<QuestionMarkCircleIcon className="QuestionMarkCircleIcon" />} />
        <Avatar icon={<Bars3BottomLeftIcon className="Bars3BottomLeftIcon" />} />
      </Space>
    </Header >
  );
};
