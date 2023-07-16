import { Avatar, Button, Layout, Space } from 'antd';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { BellIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Search from 'antd/es/input/Search';

const { Header } = Layout;
const styleHeaderButton = {
  display: 'flex',
  width: '35.895px',
  height: '35.895px',
  padding: '9px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100px',
  border: '0.947px solid var(--slate-slate-200, #E2E8F0)',
  background: 'var(--neutral-1, #FFF)'
}

const SearchNavbar = () => {
  return (
    <Header
      style={{
        display: 'flex',
        padding: '14px 16px',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderBottom: '1px solid var(--slate-slate-200, #E2E8F0)',
        background: '#FFF',
      }}
    >
      <Space
        style={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '12px',
        }}
      >
        <Button
          style={styleHeaderButton}
          icon={
            <Bars3BottomLeftIcon
              style={{
                width: '16px',
                height: '16px',
                flexShrink: 0,
              }}
            />
          }
        />
        <Search
          style={{
            display: 'flex',
            width: '264px',
            alignItems: 'center',
            alignSelf: 'stretch',
            borderRadius: '12px',
            border: '1px solid var(--slate-slate-200, #E2E8F0)',
            background: 'var(--neutral-1, #FFF)',
          }}
          placeholder='Buscar...'

        />
      </Space>
      <Space>
        <Button
          style={styleHeaderButton}
          icon={
            <BellIcon
              style={{
                width: '16px',
                height: '16px',
                flexShrink: 0,
              }}
            />
          }
        />
        <Button
          style={styleHeaderButton}
          icon={
            <QuestionMarkCircleIcon
              style={{
                width: '16px',
                height: '16px',
                flexShrink: 0,
              }}
            />
          }
        />
        <Avatar
          icon={
            <Bars3BottomLeftIcon
              style={{
                width: '16px',
                height: '16px',
                flexShrink: 0,
              }}
            />
          }
        />
      </Space>
    </Header >
  );
};

export default SearchNavbar;
