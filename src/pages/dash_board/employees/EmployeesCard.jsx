import { Avatar, Button, Col, Row, Tooltip, Typography } from 'antd';
import { CheckIcon, ClockIcon, ArrowTopRightOnSquareIcon, UserCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import '../../../assets/css/Employees.css';

const { Text, Link } = Typography;

export const EmployeesCard = () => {
    return (
        <div className="containerTasks">
            <div className="tasksFrameTitle" >
                <div className='tasksGroupTitle'>
                    <Text className="tasksTitle" > Empleados </Text>
                    <Link className='tasksLink'>
                        Ver todos
                        <ArrowTopRightOnSquareIcon className='icon' />
                    </Link>
                </div>
            </div>
            <div className='tasksContent'>
                <Row className='tasksContentRow'>
                    <Col span={18} className='tasksContentColClock'>
                        <Text className='jobText'>Desarrollo</Text>
                        <Text className='membersText'>Miembros totales: 8</Text>
                    </Col>
                    <Col span={6}>
                        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                            <Tooltip title="Ant User" placement="top">
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserCircleIcon />} />
                            </Tooltip>
                            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<HeartIcon />} />
                        </Avatar.Group>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
