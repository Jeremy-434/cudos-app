import { Button, Col, Row, Typography } from 'antd';
import { ArrowDownTrayIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { FollowUp } from './follow_up/FollowUp';
import '../../assets/css/DashBoard.css';
import { TasksCard } from './tasksCard/TasksCard';
import { EmployeesCard } from './employees/EmployeesCard';
import { JobSummary } from './job_summary/JobSummary';

const { Text, Title } = Typography;

export const DashBoardPage = () => {
  return (
    <div className='containerDashBoard'>
      <div className='groupTitle'>
        <Title className='titleDashBoard' >¡Hola, Mateo Silva!</Title>
        <div className='btnGroup'>
          <Button className='iconButtonArrow' icon={<ArrowDownTrayIcon className='icon' />} />
          <Button className='createVacancyBtn'>
            <PlusSmallIcon className='icon' />
            <Text className='createVacancyBtnText'>
              Crear Vacante
            </Text>
          </Button>
        </div>
      </div>

      <Row className='frameRow' gutter={[32, 32]}>
        <Col span={16} className='frameCol'>
          <FollowUp />
        </Col>
        <Col span={8} className='frameCol'>
          <JobSummary />
        </Col>
      </Row>
      <Row className='frameRow' gutter={[32, 32]}>
        <Col span={16} className='frameCol'>
          <TasksCard />
        </Col>
        <Col span={8} className='frameCol'>
          <EmployeesCard />
        </Col>
      </Row>
    </div>
  )
}
