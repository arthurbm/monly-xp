import { ProfileImage } from '../assets';
import React from 'react';
import { CustomText } from 'styles/globalComponents';
import { BlueBackground, Container, TextImageContainer } from 'styles/home';
import Image from 'next/image';

// import { Container } from './styles';

const Home = () => {
  return (
    <>
      <BlueBackground>
        <Container>
          <TextImageContainer>
            <Image src={ProfileImage} alt="prpofile image" />
            <CustomText margin="0 0 0 10px" align="left" white size="18px">
              Olá John
            </CustomText>
          </TextImageContainer>
          <div>
            <CustomText align="left" grey2 opacity={0.6}>
              Patrimônio líquido
            </CustomText>
            <CustomText
              margin="10px 0 10px 0"
              size="24px"
              bold
              align="left"
              white
            >
              R$ 102.012,00
            </CustomText>
          </div>
        </Container>
      </BlueBackground>
    </>
  );
};

export default Home;
