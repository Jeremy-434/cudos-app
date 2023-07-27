import { Typography } from 'antd';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts';
import '../../../assets/css/JobSummary.css';

const { Text, Link } = Typography;

const data = [
    { id: 0, value: 10, label: "Publicados" },
    { id: 1, value: 15, label: "Internos" },
    { id: 2, value: 20, label: "Privados" },
    { id: 3, value: 30, label: "Borradores" },
    { id: 4, value: 20, label: "Cerrados" },
];

export const JobSummary = () => {

    return (
        <div className="containerTasks">
            <div className="tasksFrameTitle" >
                <div className='tasksGroupTitle'>
                    <Text className="tasksTitle" > Resumen de trabajos</Text>
                </div>
            </div>
            <div className='tasksContent'>
                <PieChart
                    className={`pieChart`}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            display: 'none',
                        },
                        [`& .MuiChartsLegend-mark`]: {
                            width: '4px',
                        },
                        [`& .MuiChartsLegend-label`]: {
                            fontSize: '12px',
                        },
                    }}
                    width={380}
                    height={290}
                    colors={["orange", "blue", "red", "green", "purple"]}
                    series={[
                        {
                            arcLabel: (item) => `${item.label} (${item.value})`,
                            arcLabelMinAngle: 45,
                            data,
                            innerRadius: 80,
                            outerRadius: 70,
                            paddingAngle: 0,
                            cornerRadius: 0,
                            startAngle: -180,
                            endAngle: 180,
                            cx: 120,
                            cy: 120,
                        }
                    ]}
                />
                <div className='jobNumber'>
                    <Text className='jobNumberFisrtText'>24</Text>
                    <Text className='jobNumberText'>Trabajos totales</Text>
                </div>
            </div>
        </div>
    )
}
