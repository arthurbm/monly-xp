/* eslint-disable react/jsx-key */
import { ExchangeLine, FundsLine, ProfileImage } from '../assets';
import React from 'react';
import { CustomText } from 'styles/globalComponents';
import {
  BlueBackground,
  BlueBox,
  Container,
  ContainerGray,
  GrayBackground,
  TextImageContainer,
  WhiteBackground
} from 'styles/home';
import Image from 'next/image';
import ObjectiveCard from 'components/ObjectiveCard';
import InvestmentBox from 'components/InvestmentBox';

const Home = () => {
  const objectivesInfo = [
    {
      title: 'Viagem',
      desciption: 'Ganhar experiência',
      value: 'R$ 1.000,00',
      percentual: '10%',
      isPositive: true
    },
    {
      title: 'Aposentadoria',
      desciption: 'Ganhar experiência',
      value: 'R$ 1.500,00',
      percentual: '10%',
      isPositive: true
    },
    {
      title: 'Doação',
      desciption: 'Ganhar experiência',
      value: 'R$ 2.000,00',
      percentual: '10%',
      isPositive: true
    }
  ];

  return (
    <>
      <BlueBackground>
        <Container>
          <TextImageContainer>
            <Image src={ProfileImage} alt="profile picture" />
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
      <GrayBackground>
        <ContainerGray>
          <InvestmentBox />

          <WhiteBackground>
            <BlueBox>
              {/* <Icon name="funds-line" type="line" size="3x" /> */}
              <Image src={FundsLine} alt="icon" />
              <CustomText medium size="12px">
                Novo investimento
              </CustomText>
            </BlueBox>

            <BlueBox>
              {/* <Icon name="funds-line" type="line" size="3x" /> */}
              <Image src={ExchangeLine} alt="icon" />
              <CustomText medium size="12px">
                Aplicações programadas
              </CustomText>
            </BlueBox>
          </WhiteBackground>

          <CustomText margin="25px 0 0 0" align="left" black bold>
            Acompanhe seus objetivos
          </CustomText>
          {objectivesInfo.map((objectiveInfo) => (
            <ObjectiveCard
              title={objectiveInfo.title}
              description={objectiveInfo.desciption}
              value={objectiveInfo.value}
              percentual={objectiveInfo.percentual}
              isPositive={objectiveInfo.isPositive}
            />
          ))}
        </ContainerGray>
      </GrayBackground>
    </>
  );
};

export default Home;
