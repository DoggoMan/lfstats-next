import { CenterMetaData } from "../types/CenterMetaData";

interface Props {
  center: CenterMetaData;
}

const SocialView = ({ center }: Props) => {
  return (
    <div>
      {center.id} {center.name}
    </div>
  );
};

export default SocialView;
