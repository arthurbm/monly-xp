import React, { SetStateAction } from 'react';
import { CustomText } from 'styles/globalComponents';
import {
  Container,
  Info,
  UncheckedIcon,
  CheckedIcon,
  ComingSoon
} from './style';
import Checkbox from '@mui/material/Checkbox';

type FieldCheckProps = {
  emoji?: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  children: React.ReactNode; // description
  comingSoon?: boolean;
  checked?: boolean;
};
const FieldCheck = ({
  emoji,
  children,
  setValue,
  comingSoon,
  checked
}: FieldCheckProps) => {
  return (
    <Container>
      <Info>
        <CustomText regular>{emoji}</CustomText>
        <CustomText regular black size="16px">
          {children}
        </CustomText>
      </Info>

      {comingSoon ? (
        <ComingSoon>
          <CustomText bold size="12px">
            EM BREVE
          </CustomText>
        </ComingSoon>
      ) : (
        <Checkbox
          icon={<UncheckedIcon />}
          checkedIcon={<CheckedIcon />}
          checked={checked}
          onChange={(event) => {
            if (event.target.checked && typeof children === 'string') {
              setValue(children);
            }
          }}
        />
      )}
    </Container>
  );
};

export default FieldCheck;
