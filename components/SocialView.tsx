import { Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EventData } from "../types/EventData";

interface Props {
  event: EventData;
}

const SocialView = ({ event }: Props) => {
  let scorecards;

  if (event.games) {
    scorecards = event.games.map((item) => item.scorecards).flat();
  }

  return (
    <>
      <Heading>
        {event.center.name} - {event.name}
      </Heading>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Game</Th>
            <Th>Position</Th>
            <Th>Score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {scorecards?.map((scorecard) => (
            <Tr key={scorecard.id}>
              <Td>{scorecard.player.player_name}</Td>
              <Td>GAME NAME</Td>
              <Td>{scorecard.position}</Td>
              <Td>{scorecard.score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default SocialView;
