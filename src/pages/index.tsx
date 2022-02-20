import { AxiosResponse } from 'axios';
import { useAxios } from 'utils/useAxios';
import { useToken } from '../contexts/tokenContext';
import { Logo, GraphLine } from '../assets';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CustomText } from '../styles/globalComponents';
import { BlueButton, TextButton } from 'components';
import { Container, Content, Titles, Buttons, WhiteCircle } from './style';

export default function Start() {
  const [axiosGet] = useAxios('get');
  const { setToken } = useToken();
  const router = useRouter();

  const signIn = async () => {
    await axiosGet({
      url: '/api/accessToken',
      success: (res: AxiosResponse) => {
        const { token } = res.data;
        setToken(token);
        router.push('/home');
      },
      error: () => {
        throw Error('Erro durante login');
      }
    });
  };

  return (
    <Container>
      <Content>
        <Titles>
          <Image src={Logo} width="157px" height="47px" />
          <CustomText grey regular size="18px" width="85%">
            Criando sua disciplina financeira para um futuro mais tranquilo!
          </CustomText>
        </Titles>

        <Image src={GraphLine} width="390px" height="350px" />
      </Content>

      <WhiteCircle>
        <Buttons>
          <BlueButton onClick={signIn}>Criar conta</BlueButton>
          <TextButton width="200px" onClick={signIn}>
            Acessar minha conta
          </TextButton>
        </Buttons>
      </WhiteCircle>
    </Container>
  );
}
