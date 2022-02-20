import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header } from 'components';
import { Container, Content } from './style';

export default function NewInvestment() {
  return (
    <Container>
      <Header title="Novo investimento" previousRoute="/home">
        Insira o nome do seu objetivo e a categoria que ele se enquadra
      </Header>
    </Container>
  );
}
