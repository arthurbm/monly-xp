import { useRouter } from 'next/router';
import { Header, FieldCheck, BlueButton } from 'components';
import { Container, Content, FlexBox } from './style';
import { useEffect, useState } from 'react';
import { useToken } from 'contexts/tokenContext';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Objective, useObjective } from '../../contexts/objectiveContext';
import { useAxios } from 'utils/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

type Institution = {
  bankName: string;
};

export default function NewInvestment() {
  const router = useRouter();
  const [bank, setBank] = useState('');
  const [banks, setBanks] = useState<string[]>([]);
  const [axiosPost] = useAxios('post');
  const [loading, setLoading] = useState(false);

  const { token } = useToken();
  const { objective, setObjective } = useObjective();

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

  const goToNextPage = async () => {
    if (bank) {
      const fullObjective = { ...objective, bankName: bank };
      setObjective(fullObjective);
      setLoading(true);

      await axiosPost({
        url: '/api/objective',
        body: fullObjective,
        success: () => {
          setObjective({} as Objective);
          router.push('home');
        },
        error: (error: AxiosError) => {
          setLoading(false);
          console.log(error.message);
        }
      });
    }
  };

  return (
    <Container>
      <Content>
        <Header title="Selecione sua conta">
          Selecione a conta que será usada para os aportes automáticos
        </Header>

        {banks.map((bankName: string, index: number) => (
          <div key={bankName} style={{ marginTop: '8px' }}>
            <FieldCheck
              checked={bankName === bank}
              setValue={setBank}
              usesEmoji
              emoji={['🟠', '⚫', '🔵', '🟢'][index]}
            >
              {bankName}
            </FieldCheck>
          </div>
        ))}

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          <BlueButton onClick={goToNextPage}>
            Confirmar aplicação automática
          </BlueButton>
        </div>
        {loading && (
          <FlexBox>
            <CircularProgress />
          </FlexBox>
        )}
      </Content>
    </Container>
  );
}
