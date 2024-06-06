import SocialView from "../../components/SocialView";
import { getEventData } from "../../lib/event";
import { EventMetaData } from "../../types/EventMetaData";

interface Props {
  event: EventMetaData;
}
const Social = ({ event }: Props) => <SocialView event={event} />;

export async function getServerSideProps(context: any) {
  const eventId = context.params.eid;
  const data = await getEventData(eventId);

  return {
    props: {
      event: data,
    },
  };
}

export default Social;
