import './Msgs.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { Button, Flex, Row, Col } from 'antd';
import {
  MessageFilled, SwapRightOutlined, UserOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const chat = [
 { name:'Mohammed', icon:<UserOutlined className="senderlogo" />, message:'Hello!', path:'/messages' },
 { name:'Abdulaziz', icon:<UserOutlined className="senderlogo" />, message:'Hello!', path:'/messages' },
]

function Msgs() {
  return (
    <>
  <motion.div
      className="msgbox"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
        <Flex gap="small">
          <MessageFilled className="logo" />
          <h1 class="cardheader">Messages</h1>
        </Flex>
        {chat.map(chats => (
          <motion.div
          className="msg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
          <Link to={chats.path}>
          <Flex align="center">
          <div>
            {chats.icon}
          </div>
          <div class="msgcontent">
            <h2 class="senderheader">{chats.name}</h2>
            <p>{chats.message}</p>
          </div>
        </Flex>
        </Link>
        </motion.div>
        ))}
    </motion.div>
    </>
  );
}

export default Msgs;
