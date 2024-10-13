import './AInsights.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex } from 'antd';
import { Link } from 'react-router-dom';
import {
  SwapRightOutlined,
  ThunderboltFilled,
  WarningOutlined,
  ExclamationCircleOutlined,
  CheckOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const insight = [
  {
    key: '1',
    icon: (
      <CheckOutlined className="insightlogo" style={{ color: '#7bdc40' }} />
    ),
    name: 'Great news!',
    path: '/aichatbot',
    message: 'Accidents are down 30% in the last 2 months.',
  },
  {
    key: '2',
    icon: (
      <ExclamationCircleOutlined
        className="insightlogo"
        style={{ color: '#f0b954' }}
      />
    ),
    name: 'Beware!',
    path: '/aichatbot',
    message: 'Violations in Dhahran have increased 3% in the last quarter.',
  },
  {
    key: '3',
    icon: (
      <QuestionCircleOutlined
        className="insightlogo"
        style={{ color: '#5feece' }}
      />
    ),
    name: 'Did you know?',
    path: '/aichatbot',
    message: 'There has been 3 violations so far today.',
  },
  {
    key: '4',
    icon: (
      <WarningOutlined className="insightlogo" style={{ color: '#f06554' }} />
    ),
    name: 'Warning!',
    path: '/aichatbot',
    message: 'The number of patrols in Dhahran is insuffcient.',
  },
  {
    key: '5',
    icon: (
      <QuestionCircleOutlined
        className="insightlogo"
        style={{ color: '#5feece' }}
      />
    ),
    name: 'Did you know?',
    path: '/aichatbot',
    message:
      'The average traffic in Dhahran has increased 2% in the past month.',
  },
  {
    key: '6',
    icon: (
      <QuestionCircleOutlined
        className="insightlogo"
        style={{ color: '#5feece' }}
      />
    ),
    name: 'Did you know?',
    path: '/aichatbot',
    message:
      'The average respone time for an accident is 2 minutes and 12 seconds.',
  },
];

function AInsights() {
  return (
    <>
      <motion.div
        className="insights"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Flex gap="small">
          <ThunderboltFilled className="logo" />
          <h1 class="cardheader">Insights</h1>
        </Flex>

        {insight.map((insights) => (
          <motion.div
            className="isnightcontainer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link to={insights.path}>
              <Flex align="center">
                <div>{insights.icon}</div>
                <div class="insightcontent">
                  <h2 class="insightheader">{insights.name}</h2>
                  <p>{insights.message}</p>
                </div>
              </Flex>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default AInsights;
