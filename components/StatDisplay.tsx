import { FC } from "react";
import { Stat, StatNumber, StatHelpText } from "@chakra-ui/react";

interface StatProps {
  name: string;
  value: string;
  size?: string;
}

export const StatDisplay: FC<StatProps> = ({ name, value, size = "sm" }) => (
  <Stat size={size} mx={2}>
    <StatNumber>{value}</StatNumber>
    <StatHelpText>{name}</StatHelpText>
  </Stat>
);
