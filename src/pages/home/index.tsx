import { ExchangeLine, FundsLine, ProfileImage } from '../../assets';
import React, { useEffect, useState } from 'react';
import { CustomText } from 'styles/globalComponents';
import {
  BlueBackground,
  BlueBox,
  Container,
  ContainerGray,
  GrayBackground,
  TextImageContainer,
  WhiteBackground
} from './styles';
import Image from 'next/image';
import ObjectiveCard from 'components/ObjectiveCard';
import InvestmentBox from 'components/InvestmentBox';
import { useRouter } from 'next/router';
import { useAxios } from 'utils/useAxios';
import axios, { AxiosResponse } from 'axios';
import { useToken } from '../../contexts/tokenContext';

interface BalancePerBankProps {
  name: string;
  balance: number;
}

const Home = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string>();
  const [balance, setBalance] = useState<number>();
  const [balancePerBank, setBalancePerBank] = useState<BalancePerBankProps[]>();
  const { token } = useToken();

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

  function navigateToObjective() {
    router.push('/choose-product');
  }

  function getTotalBalance(banksObj: any) {
    return Object.keys(banksObj).reduce((acc, bank) => {
      return acc + banksObj[bank].checking.balance;
    }, 0);
  }

  function getBalancePerBank(banksObj: any) {
    const banks = Object.keys(banksObj);
    const balancePerBank = banks.map((bank) => {
      return {
        name: bank,
        balance: banksObj[bank].checking.balance
      };
    });
    return balancePerBank;
  }

  async function getUserData() {
    await axios
      .get('https://openapi.xpi.com.br/openbanking/users?limit=2&offset=0', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'PostmanRuntime/7.26.8',
          Authorization: `Bearer ${token}`
        }
      })
      .then((response: AxiosResponse) => {
        console.log(response.data[0]);
        // console.log(response.data[0].banks);
        setUserName(response.data[0].name);
        setBalance(getTotalBalance(response.data[0].banks));
        // console.log(getBalancePerBank(response.data[0].banks));
        setBalancePerBank(getBalancePerBank(response.data[0].banks));
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <BlueBackground>
        <Container>
          <TextImageContainer>
            <Image src={ProfileImage} alt="profile picture" />
            <CustomText margin="0 0 0 10px" align="left" white size="18px">
              Olá {userName}
            </CustomText>
          </TextImageContainer>
          <div>
            <CustomText align="left" grey2 opacity={0.6}>
              Patrimônio líquido
            </CustomText>
            <CustomText
              margin="10px 0 40px 0"
              size="24px"
              bold
              align="left"
              white
            >
              {balance?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </CustomText>
          </div>
        </Container>
      </BlueBackground>
      <GrayBackground>
        <ContainerGray>
          {balancePerBank && <InvestmentBox banksData={balancePerBank} />}

          <WhiteBackground>
            <BlueBox onClick={navigateToObjective}>
              <Image src={FundsLine} alt="icon" />
              <CustomText medium size="12px">
                Novo investimento
              </CustomText>
            </BlueBox>

            <BlueBox>
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
              key={objectiveInfo.title}
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
