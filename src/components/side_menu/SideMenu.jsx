import { HomeModernIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon, BriefcaseIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, SparklesIcon, UserIcon } from '@heroicons/react/24/outline';
import { Row, Col } from 'antd';
import '../../assets/css/SideMenu.css';

export const SideMenu = () => {
    return (
        <Row className="side-menu-row">
            <Col span={24}>
                {/* <div className="items-header-style">
                    <HomeModernIcon className="icon-size" />
                </div> */}
            </Col>
            <Col span={24}>
                <div className="items-header-style">
                    <HomeModernIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <CalendarDaysIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <ClipboardDocumentCheckIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <BriefcaseIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <BriefcaseIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <ClipboardDocumentListIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <SparklesIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <UserIcon className="icon-size" />
                </div>
            </Col>

            <Col span={24}>
                <div className="items-header-style">
                    <AdjustmentsHorizontalIcon className="icon-size" />
                </div>
            </Col>
        </Row >
    )
}
