import '../../assets/css/ContainerLayout.css'

export const ContainerLayout = ({ children }) => {
    return (
        <div
            className='container'
        >
            {children}
        </div>
    )
}