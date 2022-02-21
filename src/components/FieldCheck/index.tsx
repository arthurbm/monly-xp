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
  description?: string;
  height?: string;
  usesEmoji?: boolean;
  isRecommended?: boolean;
};
const FieldCheck = ({
  emoji,
  children,
  setValue,
  comingSoon,
  checked,
  description,
  height,
  usesEmoji,
  isRecommended
}: FieldCheckProps) => {
  const productDescriptionParsed = description?.split(';');

  return (
    <Container height={height}>
      <Info usesEmoji={usesEmoji}>
        {isRecommended && (
          <CustomText regular margin="0 0 10px 0">
            Melhor opção
          </CustomText>
        )}
        {emoji && <CustomText regular>{emoji}</CustomText>}
        <CustomText regular black size="16px">
          {children}
        </CustomText>
        {productDescriptionParsed?.map((productDescription) => (
          <CustomText key={productDescription} align="left" regular grey>
            {productDescription}
          </CustomText>
        ))}
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
