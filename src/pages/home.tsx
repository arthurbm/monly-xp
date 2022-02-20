/* eslint-disable react/jsx-key */
import { ProfileImage } from '../assets';
import React from 'react';
import { CustomText } from 'styles/globalComponents';
import {
  BlueBackground,
  Container,
  ContainerGray,
  GrayBackground,
  TextImageContainer
} from 'styles/home';
import Image from 'next/image';
import ObjectiveCard from 'components/ObjectiveCard';

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
