import React, { SetStateAction } from 'react';
import { CustomText } from 'styles/globalComponents';
import { Container, Info } from './style';
import Checkbox from '@mui/material/Checkbox';

type HeaderProps = {
  emoji?: string;
  setValue: React.Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode; // description
};
const FieldCheck = ({ emoji, children, setValue }: HeaderProps) => {
  return (
    <Container>
      <Info>
        <CustomText regular>{emoji}</CustomText>
        <CustomText regular black size="16px">
          {children}
        </CustomText>
      </Info>

      <Checkbox />
    </Container>
  );
};

export default FieldCheck;
