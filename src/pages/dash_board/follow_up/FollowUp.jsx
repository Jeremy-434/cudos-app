import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Card, Col, Row, Space, Typography } from 'antd';
import '../../../assets/css/FollowUp.css'

const { Title, Link, Text } = Typography;

export const FollowUp = () => {
    return (
        <Card className="card">
            <div className='cardHeaderSpace'>
                <div className="cardHeader">
                    <Title level={5} className='cardTitle'>Seguimiento de trabajos publicados</Title>
                    <Link className='cardHeaderLink' >
                        <Text className='cardHeaderLinkText' >Ver todos</Text>
                        <ArrowTopRightOnSquareIcon style={{ width: '14px', height: '14px' }} />
                    </Link>
                </div>
            </div>
            <div className="cardContent">
                <Row className='cardContentRow'>
                    <Col span={6}>
                        <Text className='cardContextTextTitle'>Trabajos</Text>
                    </Col>
                    <Col span={3}>
                        <Text className='cardContextTextTitle'>Nueva aplicación</Text>
                    </Col>
                    <Col span={3}>
                        <Text className='cardContextTextTitle'>Screening</Text>
                    </Col>
                    <Col span={3}>
                        <Text className='cardContextTextTitle'>Challenge</Text>
                    </Col>
                    <Col span={3}>
                        <Text className='cardContextTextTitle'>Interview</Text>
                    </Col>
                    <Col span={3}>
                        <Text className='cardContextTextTitle'>Test</Text>
                    </Col>
                    <Col span={3}>
                        <Text className='cardContextTextTitle'>Hired</Text>
                    </Col>
                </Row>

                {/* //* Sr Product Design */}
                <Row className='cardContentRow' gutter={[12, 12]}>
                    <Col span={6} className='cardContentColJobs'>
                        <Text className='cardContextTextJobs'>Sr Product Design</Text>
                        <Text className='cardContextTextSecondaryJobs'>Aplicaciones totales: 126</Text>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv'>
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv'>
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv'>
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv'>
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv'>
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv'>
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                </Row>

                <Row className='cardContentRow' gutter={[12, 12]}>
                    <Col span={6} className='cardContentColJobs'>
                        <Text className='cardContextTextJobs'>UX/UI Designer</Text>
                        <Text className='cardContextTextSecondaryJobs'>Aplicaciones totales: 126</Text>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv bgCyan' >
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv bgCyan' >
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv bgCyan' >
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv bgCyan' >
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv bgCyan' >
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                    <Col span={3}>
                        <div className='cardContentDiv bgCyan' >
                            <Text className='cardContentDivText'>32 Candidatos</Text>
                        </div>
                    </Col>
                </Row>
            </div>
        </Card>
    )
}
