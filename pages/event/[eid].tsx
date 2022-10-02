import { getEventMetaData } from "../../lib/event";
import { EventMetaData } from "../../types/EventMetaData";
import EventView from "../../components/EventView";

interface Props {
  event: EventMetaData;
}

const Event = ({ event }: Props) => <EventView event={event} />;

export async function getServerSideProps(context: any) {
  const eventId = context.params.eid;
  const data = await getEventMetaData(eventId);

  return {
    props: {
      event: data,
    },
  };
}

export default Event;
