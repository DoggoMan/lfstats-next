import { Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EventData } from "../types/EventData";
import MVPModal from "./MVPModal";

interface Props {
  event: EventData;
}

const SocialView = ({ event }: Props) => {
  let scorecards;

  if (event.games) {
    scorecards = event.games
      .map((item) => item.scorecards)
      .flat()
      .sort((a, b) => b.mvp - a.mvp);
  }

  return (
    <>
      <Heading>
        {event.center.name} - {event.name}
      </Heading>
      <Table size="sm" variant="striped">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Game</Th>
            <Th>Position</Th>
            <Th>Score</Th>
            <Th>MVP</Th>
            <Th>Hit Diff</Th>
            <Th>Medic Hits</Th>
            <Th>Accuracy</Th>
            <Th>Shot Team</Th>
          </Tr>
        </Thead>
        <Tbody>
          {scorecards?.map((scorecard) => (
            <Tr key={scorecard.id}>
              <Td color="red.500">{scorecard.player.player_name}</Td>
              <Td color="green.500">{scorecard.game?.name}</Td>
              <Td>{scorecard.position}</Td>
              <Td>{scorecard.score}</Td>
              <Td>
                <MVPModal
                  mvp={scorecard.mvp}
                  mvpDetails={scorecard.mvp_details}
                />
              </Td>
              <Td>
                {scorecard.hit_diff.toFixed(2)} ({scorecard.shot_opponent}/
                {scorecard.times_zapped})
              </Td>
              <Td>{scorecard.medic_hits}</Td>
              <Td>{(scorecard.accuracy * 100).toFixed(2)} %</Td>
              <Td>{scorecard.shot_team}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default SocialView;
