import { Avatar, Button, Input, Layout, Space } from 'antd';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { BellIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import '../../assets/css/SearchNavbar.css'
import { useContext } from 'react';
import { GeneralContext } from '../../context/general/GeneralContext';

const { Header } = Layout;

export const SearchNavbar = () => {

  const { isActive, setIsActive } = useContext(GeneralContext);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Header className="Header" style={{ width: `calc(100% - ${isActive ? '195px' : '76px'})`, marginLeft: `${isActive ? '195px' : '76px'}` }} >
      <Space className="Space">
        <Button className="Button" onClick={handleClick} icon={<Bars3BottomLeftIcon className="Bars3BottomLeftIcon" />} />
        <Input.Search className="Search" placeholder='Buscar...' />
      </Space>
      <Space>
        <Button className="Button" icon={<BellIcon className="BellIcon" />} />
        <Button className="Button" icon={<QuestionMarkCircleIcon className="QuestionMarkCircleIcon" />} />
        <Avatar icon={<Bars3BottomLeftIcon className="Bars3BottomLeftIcon" />} />
      </Space>
    </Header >
  );
};
