import AIchat from '../components/AI/AIchat';
import AInsights from '../components/AI/AInsights';
import MapBox from '../components/Map/MapBox'
import { Row, Col } from 'antd';

export default function Dashboard() {
  return (
    <>
<Row gutter={[16, 16]}>
              <Col>
            <MapBox />
              </Col>

              <Col>
            <AInsights />
              </Col>
            </Row>
    </>
  );
}