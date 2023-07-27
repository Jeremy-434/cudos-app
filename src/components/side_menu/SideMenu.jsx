import { HomeModernIcon } from '@heroicons/react/24/solid';
import { AdjustmentsHorizontalIcon, BriefcaseIcon, BuildingOffice2Icon, CalendarDaysIcon, ClipboardDocumentCheckIcon, ClipboardDocumentListIcon, SparklesIcon, UserIcon } from '@heroicons/react/24/outline';
import { Row, Col, Image } from 'antd';
import '../../assets/css/SideMenu.css';
import { useContext } from 'react';
import cudosTextLogo from '../../assets/img/cudos-text-logo.svg'
import cudosLogo from '../../assets/img/cudos-logo.svg'
import { GeneralContext } from '../../context/general/GeneralContext';

export const SideMenu = () => {

    const { isActive } = useContext(GeneralContext)

    return (
        <Row
            className="side-menu-row"
            style={{ width: `${isActive ? '195px' : '76px'}` }}>

            <Col span={24} style={{ height: '64px' }}>
                <div className="cudosTextLogo" style={{ padding: '20px 14px' }}>
                    <Image src={isActive ? cudosTextLogo : cudosLogo} />
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <HomeModernIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Inicio</p>
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <CalendarDaysIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Calendario</p>
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <ClipboardDocumentCheckIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Tareas</p>
                </div>
            </Col>

            <Col span={24}>
                <p className='menuTitleGroup' style={{ display: `${isActive ? 'block' : 'none'}` }} >Reclutamiento</p>
            </Col>

            <Col span={24}>
                <div className="item">
                    <BriefcaseIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Trabajos</p>
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <ClipboardDocumentListIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Candidatos</p>
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <SparklesIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Referidos</p>
                </div>
            </Col>

            <Col span={24}>
                <p className='menuTitleGroup' style={{ display: `${isActive ? 'block' : 'none'}` }}  >Emprendimiento</p>
            </Col>

            <Col span={24}>
                <div className="item">
                    <UserIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Empleados</p>
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <BuildingOffice2Icon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Estructura</p>
                </div>
            </Col>

            <Col span={24}>
                <div className="item">
                    <AdjustmentsHorizontalIcon className="icon-size" />
                    <p className='paragraph' style={{ display: `${isActive ? 'block' : 'none'}` }} >Ajustes</p>
                </div>
            </Col>
            <Col span={24} className='colFooterSideMenu'>
                <div className="cudosTextLogo footerSideMenu">
                    <Image src={isActive ? cudosTextLogo : cudosLogo} />
                </div>
            </Col>
        </Row >
    )
}
