import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header, Input, FieldCheck, BlueButton } from '../../components';
import { Container, Content } from './style';
import { useState } from 'react';
import productsData from './productsData.json';
import { useToken } from 'contexts/tokenContext';

type ProductType = {
  name: string;
  comingSoon?: boolean;
  description: string;
};

function ChooseProduct() {
  const router = useRouter();
  const [objective, setObjective] = useState('');
  const [chosenProduct, setChosenProduct] = useState('');
  const { token } = useToken();

  const goToNextPage = () => {
    if (objective && chosenProduct) {
      console.log(objective, chosenProduct);
      // router.push('')
    }
  };

  // async function getUserData() {
  //   await axios
  //     .get('https://openapi.xpi.com.br/openbanking/users?limit=2&offset=0', {
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'User-Agent': 'PostmanRuntime/7.26.8',
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then((response: AxiosResponse) => {
  //       console.log(response.data[0]);
  //       // console.log(response.data[0].banks);        setBalancePerBank(getBalancePerBank(response.data[0].banks));
  //     });
  // }

  // useEffect(() => {
  //   getUserData();
  // }, []);

  return (
    <Container>
      <Content>
        <Header title="Escolha o produto" previousRoute="/home">
          Insira o nome do seu objetivo e a categoria que ele se enquadra
        </Header>

        {productsData.map(({ name, description, comingSoon }: ProductType) => (
          <div key={name} style={{ marginBottom: '8px' }}>
            <FieldCheck
              checked={name === chosenProduct}
              setValue={setChosenProduct}
              comingSoon={comingSoon}
              description={description}
              height="150px"
              usesEmoji={false}
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
