import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header, Input, FieldCheck } from 'components';
import { Container, Content } from './style';
import { useState } from 'react';

export default function NewInvestment() {
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      <Content>
        <Header title="Novo investimento" previousRoute="/home">
          Insira o nome do seu objetivo e a categoria que ele se enquadra
        </Header>

        <Input placeholder="Nome do objetivo" />

        <CustomText
          semiBold
          black
          style={{ textAlign: 'left', margin: '24px 0' }}
        >
          Categorias
        </CustomText>

        <FieldCheck emoji="⛑️" setValue={setChecked}>
          Fundo de emergência
        </FieldCheck>
      </Content>
    </Container>
  );
}
