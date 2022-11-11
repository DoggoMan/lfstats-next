import { Box, Text } from "@chakra-ui/react";
import { memo } from "react";
import ScrollableFeed from "./ScrollableFeed";
import { GameAction } from "../types/GameAction";
import { millisToMinutesAndSeconds } from "../lib/helper";

interface ReplayActionsProps {
  actions: GameAction[];
}

function ReplayActions({ actions }: ReplayActionsProps) {
  return (
    <Box height={480}>
      <ScrollableFeed>
        {actions.map((action, index) => (
          <div key={index}>
            {millisToMinutesAndSeconds(action.action_time)}{" "}
            <Text as="span" color={`${action.actor?.team.ui_color}.500`}>
              {action.actor?.name}
            </Text>
            {action.action_text}
            <Text as="span" color={`${action.target?.team.ui_color}.500`}>
              {action.target?.name}
            </Text>
          </div>
        ))}
      </ScrollableFeed>
    </Box>
  );
}

export default memo(ReplayActions);
