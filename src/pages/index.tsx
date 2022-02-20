import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect } from 'react';
import { useAxios } from 'utils/useAxios';
import { useToken } from '../contexts/tokenContext';
import { Logo, GraphLine } from '../assets';
import Image from 'next/image';
import { CustomText } from '../styles/globalComponents';
import { BlueButton, TextButton } from 'components';
import { Container, Content, Titles, Buttons, WhiteCircle } from './style';

export default function Home() {
  // const [axiosGet] = useAxios('get');
  // const { setToken } = useToken();

  // const getToken = useCallback(async () => {
  //   await axiosGet({
  //     url: '/api/accessToken',
  //     success: (res: AxiosResponse) => {
  //       const { token } = res.data;
  //       setToken(token);
  //     },
  //     error: (err: AxiosError) => {
  //       console.log(err);
  //     }
  //   });
  // }, [axiosGet, setToken]);

  // useEffect(() => {
  //   getToken();
  // }, [getToken]);

  return (
    <Container>
      <Content>
        <Titles>
          <Image src={Logo} />
          <CustomText grey regular size="18px" width="85%">
            Criando sua disciplina financeira para um futuro mais tranquilo!
          </CustomText>
        </Titles>

        <Image src={GraphLine} />

        {/* <WhiteCircle> */}
        <Buttons>
          <BlueButton>Criar conta</BlueButton>
          <TextButton width="200px">Acessar minha conta</TextButton>
        </Buttons>
        {/* </WhiteCircle> */}
      </Content>
    </Container>
  );
}
