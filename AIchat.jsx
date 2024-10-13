import './AIchat.css'
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex, Input, Button } from 'antd';
import {
  HomeFilled, SwapRightOutlined, ThunderboltFilled
} from '@ant-design/icons';

function AIchat() {

  return (
    <>
    <motion.div
      className="aichat"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <Flex gap="small">
          <ThunderboltFilled className="logo" />
          <h1 class="cardheader">AI Chatbot</h1>
    </Flex>

    <motion.div
      className="input"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Flex vertical>
        <div class="chatbacking">
          
        </div>
        <Flex>
        <Input placeholder="Enter text here" className="aiinput"/>
        
        <Button className="aiinputbutton" type="primary">Submit</Button>
        </Flex>
      </Flex>
    </motion.div>
    </motion.div>
    </>
  )
}

export default AIchat