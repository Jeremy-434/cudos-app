import { Button, Col, Row, Typography } from 'antd';
import { ArrowDownCircleIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import '../../../assets/css/TasksCard.css';

const { Text, Link } = Typography;

export const TasksCard = () => {
    return (
        <div className="containerTasks">
            <div className="tasksFrameTitle" >
                <div className='tasksGroupTitle'>
                    <Text className="tasksTitle" > Mis tareas </Text>
                    <Link className='tasksLink'>
                        En progreso
                        <ArrowDownCircleIcon className='icon' />
                    </Link>
                </div>
            </div>
            <div className='tasksContent'>
                <Row className='tasksContentRow'>
                    <Col span={8} className='tasksContentColCLock'>
                        <ClockIcon className='icon tasksIconClock'/>
                        7:00 - 7:45 AM
                    </Col>
                    <Col span={14}>
                        Interview Santiago Leaf
                    </Col>
                    <Col span={2} >
                        <Button>
                            <CheckIcon className='icon' />
                        </Button>
                    </Col>
                </Row>
                <Row className='tasksContentRow'>
                    <Col span={8} className='tasksContentColCLock'>
                        <ClockIcon className='icon tasksIconClock'/>
                        7:00 - 7:45 AM
                    </Col>
                    <Col span={14}>
                        Interview Santiago Leaf
                    </Col>
                    <Col span={2} >
                        <Button>
                            <CheckIcon className='icon' />
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
