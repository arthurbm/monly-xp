import React from 'react';
import { CustomText } from 'styles/globalComponents';
import { LeftWrapper, RightWrapper, WhiteBackgorund } from './styles';

// import { Container } from './styles';

interface ObjectiveCardProps {
  title: string;
  description: string;
  value: string;
  percentual: string;
  isPositive?: boolean;
}

const ObjectiveCard = ({
  title,
  description,
  value,
  percentual,
  isPositive
}: ObjectiveCardProps) => {
  return (
    <>
      <WhiteBackgorund>
        <LeftWrapper>
          <CustomText black>{title}</CustomText>
          <CustomText margin="5px 0 0 0" grey size="12px">
            {description}
          </CustomText>
        </LeftWrapper>
        <RightWrapper>
          <CustomText bold>{value}</CustomText>
          {isPositive && (
            <CustomText size="12px" green bold>
              {percentual}
            </CustomText>
          )}
        </RightWrapper>
      </WhiteBackgorund>
    </>
  );
};

export default ObjectiveCard;
