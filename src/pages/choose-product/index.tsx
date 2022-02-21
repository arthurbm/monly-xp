import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header, Input, FieldCheck, BlueButton } from '../../components';
import { Container, Content } from './style';
import { useState } from 'react';
import productsData from './productsData.json';

type ProductType = {
  name: string;
  comingSoon?: boolean;
  description: string;
};

function ChooseProduct() {
  const router = useRouter();
  const [objective, setObjective] = useState('');
  const [chosenProduct, setChosenProduct] = useState('');

  const goToNextPage = () => {
    if (chosenProduct) {
      router.push('choose-account');
    }
  };

  return (
    <Container>
      <Content>
        <Header title="Escolha o produto">
          Insira o nome do seu objetivo e a categoria que ele se enquadra
        </Header>

        {productsData.map(({ name, description, comingSoon }: ProductType) => (
          <div key={name} style={{ marginBottom: '8px' }}>
            <FieldCheck
              checked={name === chosenProduct}
              setValue={setChosenProduct}
              comingSoon={comingSoon}
              description={description}
            >
              {name}
            </FieldCheck>
          </div>
        ))}

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          <BlueButton onClick={goToNextPage}>Selecionar</BlueButton>
        </div>
      </Content>
    </Container>
  );
}

export default ChooseProduct;
