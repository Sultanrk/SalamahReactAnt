import './ActivityPanel.css'
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex } from 'antd';
import {
  ClockCircleFilled
} from '@ant-design/icons';

function ActivityPanel() {

  return (
    <>
    <motion.div
      className="activity"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
        <Flex gap="small">
          <ClockCircleFilled className="logo" />
          <h1 class="cardheader">Activity</h1>
        </Flex>
      </motion.div>
    </>
  )
}

export default ActivityPanel