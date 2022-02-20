import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CustomText } from 'styles/globalComponents';
import {
  ButtonDate,
  CircularProgressPriceContainer,
  TextContainer
} from './style';

// import { Container } from './styles';

interface CircularProgressPriceProps {
  value: number;
  maxValue: number;
  daysMissing: number;
}

const CircularProgressPrice = ({
  value,
  maxValue,
  daysMissing
}: CircularProgressPriceProps) => {
  return (
    <>
      <CircularProgressPriceContainer>
        <CircularProgressbarWithChildren value={value} maxValue={maxValue}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          <TextContainer>
            <CustomText black bold size="32px">
              R$ {value}
            </CustomText>

            <CustomText grey size="16px">
              Faltam R$ {`${maxValue - value}`}
            </CustomText>
            <ButtonDate>Restam {daysMissing} dias</ButtonDate>
          </TextContainer>
        </CircularProgressbarWithChildren>
      </CircularProgressPriceContainer>
    </>
  );
};

export default CircularProgressPrice;
