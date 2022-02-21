import { BlueBall, OrangeBall, UpArrow } from 'assets';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { CustomText } from 'styles/globalComponents';
import {
  BankDiv,
  Divider,
  PriceContainer,
  PricesContainer,
  WhiteBackgorund
} from './styles';

// import { Container } from './styles';

interface BalancePerBankProps {
  name: string;
  balance: number;
}

interface InvestmentBoxProps {
  banksData: BalancePerBankProps[];
}

const InvestmentBox = ({ banksData }: InvestmentBoxProps) => {
  return (
    <>
      <WhiteBackgorund>
        <CustomText align="left" black medium>
          Disponível para investir
        </CustomText>
        <CustomText margin="20px 0 0 0" size="20px" medium align="left">
          R$ 1202,21
        </CustomText>

        <Divider margin="16px 0 0 0" />

        <CustomText margin="16px 0 0 0" align="left" medium black>
          Saldos atuais
        </CustomText>
        {banksData?.map((bankData) => (
          <BankDiv key={bankData.name}>
            <div style={{ display: 'flex' }}>
              <Image src={BlueBall} alt="blue ball" />
              <CustomText margin="0 0 0 14px" align="left" black>
                Banco {bankData.name}
              </CustomText>
            </div>
            <CustomText black>
              {bankData.balance.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </CustomText>
          </BankDiv>
        ))}

        <Divider margin="16px 0 0 0" />

        <CustomText margin="16px 0 0 0" black medium align="left">
          Movimentação
        </CustomText>

        <PricesContainer>
          <PriceContainer>
            <CustomText grey4 size="12px">
              Recebidos totais
            </CustomText>
            <CustomText size="20px" green medium>
              R$ 3.202,21{' '}
            </CustomText>
          </PriceContainer>

          <PriceContainer margin="0 0 0 16px">
            <CustomText grey4 size="12px">
              Gastos totais
            </CustomText>
            <CustomText size="20px" red medium>
              R$ 1.202,21
            </CustomText>
          </PriceContainer>
        </PricesContainer>

        <Divider margin="16px 0 16px 0" />

        <Image src={UpArrow} alt="up arrow" />
      </WhiteBackgorund>
    </>
  );
};

export default InvestmentBox;
