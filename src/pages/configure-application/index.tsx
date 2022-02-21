import { useRouter } from 'next/router';
import { CustomText } from '../../styles/globalComponents';
import { Header, FieldCheck, BlueButton } from 'components';
import {
  Slider,
  Select,
  MenuItem,
  FilledInput,
  InputAdornment
} from '@mui/material';
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

type Frequency = 'Trimestral' | 'Mensal' | 'Quinzenal' | 'Semestral';

export default function NewInvestment() {
  const router = useRouter();
  const [aportType, setAportType] = useState('Valor fixo');
  const [balancePercentage, setBalancePercentage] = useState(50);
  const [inicialAport, setInicialAport] = useState<number>(0);
  const [frequency, setFrequency] = useState<Frequency>('Mensal');

  const { objective, chosenCategory } = router.query;

  const possibleTypes = ['Valor fixo', 'Parte do saldo restante do mês'];

  const goToNextPage = () => {
    if (
      (aportType === 'Valor fixo' &&
        typeof Number(inicialAport) === 'number') ||
      aportType === 'Parte do saldo restante do mês'
    ) {
      setInicialAport(Number(inicialAport));
      router.push('choose-product');
    } else {
      alert('Verifique os campos');
    }
  };

  return (
    <Container>
      <Content>
        <Header title="Configurar aplicação">
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
          {aportType === 'Parte do saldo restante do mês' ? (
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
          ) : (
            <InformationRow>
              <CustomText regular black>
                Aporte inicial:
              </CustomText>
              <FilledInput
                inputMode="numeric"
                value={inicialAport}
                onChange={(event) => setInicialAport(event.target.value)}
                startAdornment={
                  <InputAdornment position="start">R$</InputAdornment>
                }
              />
            </InformationRow>
          )}

          <InformationRow>
            <CustomText regular black>
              Frequência:
            </CustomText>
            <Select
              value={frequency}
              onChange={(event) => setFrequency(event.target.value)}
            >
              <MenuItem value="Quinzenal">Quinzenal</MenuItem>
              <MenuItem value="Mensal">Mensal</MenuItem>
              <MenuItem value="Trimestral">Trimestral</MenuItem>
              <MenuItem value="Semestral">Semestral</MenuItem>
            </Select>
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
