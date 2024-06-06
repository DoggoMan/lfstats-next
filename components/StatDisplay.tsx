import { Stat, StatNumber, StatLabel } from "@chakra-ui/react";
import { FC } from "react";

interface StatProps {
  name: string;
  value: string | number;
  labelColor?: string;
  size?: string;
}

export const StatDisplay: FC<StatProps> = ({
  name,
  value,
  labelColor = null,
  size = "sm",
}) => (
  <Stat size={size}>
    <StatLabel color={labelColor ?? undefined}>{name}</StatLabel>
    <StatNumber>{value}</StatNumber>
  </Stat>
);
