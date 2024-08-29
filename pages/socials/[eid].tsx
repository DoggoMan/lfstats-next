import SocialView from "components/SocialView";
import { getEventMetaData } from "lib/event";
import { EventData } from "types/EventData";

interface Props {
  event: EventData;
}
const Social = ({ event }: Props) => <SocialView event={event} />;

export async function getServerSideProps(context: any) {
  const eventId = context.params.eid;
  const data = await getEventMetaData(eventId);

  return {
    props: {
      event: data,
    },
  };
}

export default Social;
