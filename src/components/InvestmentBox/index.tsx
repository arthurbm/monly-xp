import { BlueBall, OrangeBall } from 'assets';
import Image from 'next/image';
import React from 'react';
import { CustomText } from 'styles/globalComponents';
import { BankDiv, Divider, WhiteBackgorund } from './styles';

// import { Container } from './styles';

const InvestmentBox = () => {
  return (
    <>
      <WhiteBackgorund>
        <CustomText align="left" black medium>
          Disponível para investir
        </CustomText>
        <CustomText size="20px" medium align="left">
          R$ 1202,21
        </CustomText>

        <Divider />

        <CustomText margin="16px 0 0 0" align="left" medium black>
          Saldos atuais
        </CustomText>
        <BankDiv>
          <div style={{ display: 'flex' }}>
            <Image src={BlueBall} alt="blue ball" />
            <CustomText margin="0 0 0 14px" align="left" black>
              Banco A
            </CustomText>
          </div>
          <CustomText black>R$ 1.000,00</CustomText>
        </BankDiv>

        <BankDiv>
          <div style={{ display: 'flex' }}>
            <Image src={OrangeBall} alt="blue ball" />
            <CustomText margin="0 0 0 10px" align="left" black>
              Banco B
            </CustomText>
          </div>
          <CustomText black>R$ 1.000,00</CustomText>
        </BankDiv>

        <Divider margin="16px 0 0 0" />

        <CustomText black medium align="left">
          Movimentação
        </CustomText>
      </WhiteBackgorund>
    </>
  );
};

export default InvestmentBox;
