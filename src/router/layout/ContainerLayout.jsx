import { useContext } from 'react'
import '../../assets/css/ContainerLayout.css'
import { GeneralContext } from '../../context/general/GeneralContext'

export const ContainerLayout = ({ children }) => {

    const { isActive } = useContext(GeneralContext)

    return (
        <div
            className='container'
            style={{ width: `calc(100% - ${ isActive ? '195px' : '76px' })`, marginLeft: `${ isActive ? '195px' : '76px' }` }}
        >
            {children}
        </div>
    )
}