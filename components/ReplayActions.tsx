import { GameAction } from "../lib/game";
import { millisToMinutesAndSeconds } from "../lib/helper";
import ScrollableFeed from "react-scrollable-feed";
import { Text, Box } from "@chakra-ui/react";
import { memo } from "react";

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
