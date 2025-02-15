import { useParams } from 'next/navigation';
import DetailContent from '../../src/components/detail-content';
import LayoutDefault from '../../src/components/layouts/layout-default';

function DesignDetail() {
  const params = useParams();

  return (
    <LayoutDefault>
      <DetailContent id={params?.id.toString() ?? ''} />
    </LayoutDefault>
  );
}

export default DesignDetail;
