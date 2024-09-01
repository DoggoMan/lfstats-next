import { Divider, Heading } from "@chakra-ui/react";
import { EventMetaData } from "types/EventMetaData";
import ScorecardSummaryTable from "components/ScorecardSummaryTable";

interface Props {
  event: EventMetaData;
}

export default function SocialView({ event }: Props) {
  return (
    <>
      <Heading>
        {event.center.name} - {event.name}
      </Heading>
      <Divider />
      <Heading size="lg">Overall</Heading>
      <ScorecardSummaryTable eventId={event.id} />
    </>
  );
}
