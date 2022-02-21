import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header, Input, FieldCheck, BlueButton } from '../../components';
import { Container, Content } from './style';
import { useEffect, useState } from 'react';
// import productsData from './productsData.json';
import { useToken } from 'contexts/tokenContext';
import axios, { AxiosResponse } from 'axios';

type ProductType = {
  name: string;
  comingSoon?: boolean;
  description: string;
  suitability?: number;
  isRecommended?: boolean;
};

function ChooseProduct() {
  const router = useRouter();
  const [chosenProduct, setChosenProduct] = useState<string>('');
  const [recommendedProduct, setRecommendedProduct] = useState<ProductType>();
  const { token } = useToken();

  const [productsData, setProductsData] = useState([
    {
      name: 'CDB Liquidez Diária',
      description: 'Risco: Mínimo;Rendimento (12M): 25%;Liquidez: D+1',
      suitability: 25,
      isRecommended: false
    },
    {
      name: 'Produto',
      description: 'Risco: Moderado;Rendimento (12M): 25%;Liquidez: D+1',
      suitability: 50,
      isRecommended: false
    },
    {
      name: 'Produto 2',
      description: 'Risco: Alto;Rendimento (12M): 25%;Liquidez: D+1',
      suitability: 75,
      isRecommended: false
    }
  ]);

  const productSuitabilities = productsData.map((productData) => {
    return productData.suitability;
  });

  const goToNextPage = () => {
    if (chosenProduct) {
      router.push('choose-account');
    }
  };

  function getSuitabilityClosestProductNumber(suitabilityAvarage: number) {
    return productSuitabilities.reduce(function (prev, curr) {
      return Math.abs(curr - suitabilityAvarage) <
        Math.abs(prev - suitabilityAvarage)
        ? curr
        : prev;
    });
  }

  function getAvarageBanksSuitability(banksObj: any) {
    let avarage = 0;
    banksObj.forEach((bank: any) => {
      avarage += bank.suitability;
    });
    return avarage / banksObj.length;
  }

  function chooseRecommendedProduct(suitability: number) {
    productsData.forEach((product) => {
      if (product.suitability === suitability) {
        setRecommendedProduct(product);
        setProductsData((prevState) => {
          const newItem = [...prevState];
          newItem.forEach((item) => {
            if (item.suitability === suitability) {
              item.isRecommended = true;
            }
          });
          console.log(newItem);
          return newItem;
        });
      }
    });
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
        const avarageSuitability = getAvarageBanksSuitability(
          response.data[0].banks
        );
        const suitabilityClosestProductNumber =
          getSuitabilityClosestProductNumber(avarageSuitability);

        chooseRecommendedProduct(suitabilityClosestProductNumber);

        // console.log(response.data[0].banks);        setBalancePerBank(getBalancePerBank(response.data[0].banks));
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Content>
        <Header title="Escolha o produto" previousRoute="/home">
          Insira o nome do seu objetivo e a categoria que ele se enquadra
        </Header>

        {productsData.map(
          ({ name, description, comingSoon, isRecommended }: ProductType) => (
            <div key={name} style={{ marginBottom: '8px' }}>
              <FieldCheck
                checked={name === chosenProduct}
                setValue={setChosenProduct}
                comingSoon={comingSoon}
                description={description}
                height="150px"
                usesEmoji={false}
                isRecommended={isRecommended}
              >
                {name}
              </FieldCheck>
            </div>
          )
        )}

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
