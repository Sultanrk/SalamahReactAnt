import './QuickAccess.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex, Row } from 'antd';
import {
  SwapRightOutlined,
  HomeFilled,
  ProductFilled,
  SnippetsFilled,
  ClockCircleFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const options = [
  {
    key: '1',
    label: 'Home',
    icon: <HomeFilled />,
    type: 'primary',
    path: '/home',
  },
  {
    key: '2',
    label: 'Dashboard',
    icon: <ProductFilled />,
    type: 'primary',
    path: '/dashboard',
  },
  {
    key: '3',
    label: 'Activity',
    icon: <ClockCircleFilled />,
    type: 'primary',
    path: '/activity',
  },
  {
    key: '4',
    label: 'Reports',
    icon: <SnippetsFilled />,
    type: 'primary',
    path: '/reports',
  },
];

function QuickAccess() {
  return (
    <>
      <motion.div
        className="Qckbox"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Flex gap="small">
          <ProductFilled className="logo" />
          <h1 class="cardheader">Quick Access</h1>
          <Link className="editflex" to="/aichatbot">
            <motion.div
              class="editbutton"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }} >
              Edit
            </motion.div>
          </Link>
        </Flex>
        <Row justify="center" align="middle">
            {options.map((option) => (
              <Link to={option.path} className="qckflex">
                <motion.div
                  className="qckbutton"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }} >
                  {option.icon} {option.label}
                </motion.div>
              </Link>
            ))}
        </Row>
      </motion.div>
    </>
  );
}

export default QuickAccess;
