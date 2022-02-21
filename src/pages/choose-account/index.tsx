import { useRouter } from 'next/router';
import { Header, FieldCheck, BlueButton } from 'components';
import { Container, Content } from './style';
import { useEffect, useState } from 'react';
import theme from 'styles/theme';
import { useToken } from 'contexts/tokenContext';
import axios, { AxiosResponse } from 'axios';

type Institution = {
  bankName: string;
};

export default function NewInvestment() {
  const router = useRouter();
  const [bank, setBank] = useState('');
  const [banks, setBanks] = useState<string[]>([]);
  const { token } = useToken();

  const getBanksNames = (banksArray: { institution: Institution }[]) => {
    return banksArray.map(
      ({ institution }: { institution: Institution }) => institution.bankName
    );
  };

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
        setBanks(getBanksNames(response.data[0].banks));
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  const goToNextPage = () => {
    router.push('choose-product');
  };

  return (
    <Container>
      <Content>
        <Header title="Selecione sua conta">
          Selecione a conta que será usada para os aportes automáticos
        </Header>

        {banks.map((bankName: string) => (
          <div key={bankName} style={{ marginTop: '8px' }}>
            <FieldCheck checked={bankName === bank} setValue={setBank}>
              {bankName}
            </FieldCheck>
          </div>
        ))}

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          <BlueButton onClick={goToNextPage}>Continuar</BlueButton>
        </div>
      </Content>
    </Container>
  );
}
