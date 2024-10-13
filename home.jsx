import Msgs from '../components/Messages/Msgs';
import QuickAccess from '../components/Quick Access/QuickAccess';
import AInsights from '../components/AI/AInsights';
import MapView from '../components/Map/MapView';
import { Row, Col } from 'antd';

export default function Home() {
  return (
    <>
      <Row gutter={[16, 16]}>
              <Col>
            <Msgs />
            <QuickAccess />
              </Col>

              <Col>
            <MapView />
              </Col>

              <Col>
            <AInsights />
              </Col>
            </Row>
    </>
  );
}