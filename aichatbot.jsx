import AIchat from '../components/AI/AIchat';
import AInsights from '../components/AI/AInsights';
import { Row, Col } from 'antd';

export default function Aichatbot() {
  return (
    <>
      <Row gutter={[16, 16]}>
              <Col>
            <AIchat />
              </Col>

              <Col>
            <AInsights />
              </Col>
            </Row>
    </>
  );
}