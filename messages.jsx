import MessagesPanel from '../components/Messages/MessagesPanel';
import AInsights from '../components/AI/AInsights';
import { Row, Col } from 'antd';   

export default function Messages() {
  return (
    <>
      <Row gutter={[16, 16]}>
              <Col>
              <MessagesPanel />
              </Col>
              
              <Col>
              <AInsights />
              </Col>
            </Row>
    </>
  );
}