import SocialView from "../../components/SocialView";
import { getCenterMetaData } from "../../lib/center";
import { CenterMetaData } from "../../types/CenterMetaData";

interface Props {
  center: CenterMetaData;
}
const Social = ({ center }: Props) => <SocialView center={center} />;

export async function getServerSideProps(context: any) {
  const centerId = context.params.cid;
  const data = await getCenterMetaData(centerId);

  return {
    props: {
      center: data,
    },
  };
}

export default Social;
