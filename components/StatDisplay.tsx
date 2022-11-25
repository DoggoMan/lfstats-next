import { Stat, StatHelpText, StatNumber, StatLabel } from "@chakra-ui/react";
import { FC } from "react";

interface StatProps {
  name: string;
  value: string | number;
  size?: string;
}

export const StatDisplay: FC<StatProps> = ({ name, value, size = "sm" }) => (
  <Stat size={size}>
    <StatLabel>{name}</StatLabel>
    <StatNumber>
      {value.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}
    </StatNumber>
  </Stat>
);
