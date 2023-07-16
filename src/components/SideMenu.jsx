import { HomeModernIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon, BriefcaseIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, SparklesIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button, Layout, Space } from 'antd';
import './styles.css';

const { Header } = Layout;

const itemsHeaderStyle = {
    display: "flex",
    padding: "16px",
    alignItems: "center",
    gap: "20px",
    alignSelf: "stretch",
    borderRadius: "16px",
    background: "var(--blue-blue-50, #EFF6FF)",
}

const iconSize = {
    width: '20px',
    height: '20px',
    margin: '12px'
}

export const SideMenu = () => {
    return (
        <Space
            style={{
                display: "flex",
                width: "76px",
                padding: "0px 12px 12px 12px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                flexShrink: 0,
                alignSelf: "stretch",
                border: "1px solid black"
            }}
        >
            <Header style={itemsHeaderStyle} className='items-header-style'>
                <HomeModernIcon style={iconSize} className='items-header-style' />
            </Header>

            <Header style={itemsHeaderStyle}>
                <CalendarDaysIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <ClipboardDocumentCheckIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <BriefcaseIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <BriefcaseIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <ClipboardDocumentListIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <SparklesIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <UserIcon style={iconSize} />
            </Header>

            <Header style={itemsHeaderStyle}>
                <AdjustmentsHorizontalIcon style={iconSize} />
            </Header>
        </Space >
    )
}
