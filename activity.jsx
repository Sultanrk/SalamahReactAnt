import ActivityPanel from '../components/Activity/ActivityPanel';
import AInsights from '../components/AI/AInsights';
import { Row, Col } from 'antd';

export default function Activity() {
  return (
    <>
      <Row gutter={[16, 16]}>
              <Col>
            <ActivityPanel />         
              </Col>
              
              <Col>
              <AInsights />
              </Col>
            </Row>
    </>
  );
}