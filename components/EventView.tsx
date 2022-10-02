import { EventMetaData } from "../types/EventMetaData";

interface Props {
  event: EventMetaData;
}

const EventView = ({ event }: Props) => {
  return <div>{event.id}</div>;
};

export default EventView;
