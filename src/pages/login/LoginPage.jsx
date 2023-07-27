import { Button, Divider, Image, Input, Space, Typography } from 'antd';
import cudosLogo from '../../../src/assets/img/cudos-logo.svg';
import '../../assets/css/Login.css'

const { Title, Text, Paragraph, Link } = Typography;

export const LoginPage = () => {
    return (
        <div className='containerLogin'>
            <Image src={cudosLogo} style={{ width: '51px', height: '56.468px' }} />
            <div className='loginCard'>
                <div className='loginTitle'>Inicia sesión</div>
                <div className='loginForm' >
                    <div className='loginInputDiv'>
                        <label className='loginInputLabel'>Correo electronico</label>
                        <Input className='loginInput' placeholder='hello@cudoshr.com' />
                    </div>
                    <Button className='continueBtn'>Continuar</Button>
                    <Paragraph className='loginParagraph'>
                        ¿No tienes una cuenta?
                        <Link className='loginRegisterLink'>Registrarme</Link>
                    </Paragraph>
                </div>
                <Divider className='divider' />
                <div className='btnsSpace'>
                    <Button className='btnLoginWith'>Continuar con Google</Button>
                    <Button className='btnLoginWith'>Continuar con Microsoft</Button>
                </div>
            </div>
            <Text className='loginFooterText'>Todos los derechos reservados ©2023</Text>
        </div>
    )
}
