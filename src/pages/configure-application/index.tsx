import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header, FieldCheck, BlueButton } from 'components';
import Slider from '@mui/material/Slider';
import {
  Container,
  Content,
  ChosenOptions,
  AportSection,
  HowMuchOfBalance,
  InformationRow,
  Balance
} from './style';
import { useState } from 'react';
import theme from 'styles/theme';

export default function NewInvestment() {
  const router = useRouter();
  const [aportType, setAportType] = useState('');
  const [balancePercentage, setBalancePercentage] = useState(50);

  const { objective, chosenCategory } = router.query;

  const possibleTypes = ['Valor fixo', 'Parte do saldo restante do mês'];

  const goToNextPage = () => {
    if (objective && chosenCategory) {
      // router.push('')
    }
  };

  return (
    <Container>
      <Content>
        <Header title="Configurar aplicação" previousRoute="/new-investment">
          Configure os aportes de acordo com o seu objetivo
        </Header>

        <ChosenOptions>
          <CustomText regular grey4>
            Objetivo
          </CustomText>
          <CustomText regular black>
            {objective}
          </CustomText>
        </ChosenOptions>

        <ChosenOptions>
          <CustomText regular grey4>
            Categoria
          </CustomText>
          <CustomText regular black>
            {chosenCategory}
          </CustomText>
        </ChosenOptions>

        <AportSection>
          <CustomText semiBold black>
            Aportes
          </CustomText>

          <CustomText regular size="14px " style={{ color: '#5D606D' }}>
            Valor que será aplicado automaticamente a cada intervalo de tempo
          </CustomText>
        </AportSection>

        {possibleTypes.map((fieldName: string) => (
          <div key={fieldName} style={{ marginTop: '8px' }}>
            <FieldCheck
              checked={fieldName === aportType}
              setValue={setAportType}
            >
              {fieldName}
            </FieldCheck>
          </div>
        ))}

        <HowMuchOfBalance>
          <Balance>
            <InformationRow>
              <CustomText semiBold grey4 size="12px">
                QUANTIDADE:
              </CustomText>
              <CustomText semiBold>{`${balancePercentage}%`}</CustomText>
            </InformationRow>

            <Slider
              style={{ color: theme.main.colors.primary, margin: '0 10px' }}
              value={balancePercentage}
              onChange={(event, newValue) => {
                if (typeof newValue === 'number')
                  setBalancePercentage(newValue);
              }}
            />
          </Balance>

          <InformationRow>
            <CustomText regular black>
              Frequência:
            </CustomText>
          </InformationRow>

          <InformationRow>
            <CustomText regular black>
              Aporte inicial:
            </CustomText>
          </InformationRow>
        </HowMuchOfBalance>

        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}
        >
          <BlueButton onClick={goToNextPage}>Continuar</BlueButton>
        </div>
      </Content>
    </Container>
  );
}
