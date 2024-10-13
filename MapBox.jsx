import './MapView.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { Button, Flex, Row, Col } from 'antd';
import {
  MessageFilled,
  SwapRightOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const location = [
  {
    icon: <UserOutlined className="senderlogo" />,
    name: 'Location 1',
    patrols: 'Patrols: ',
    patnum: '4',
    accidents: 'Accidents: ',
    accnum: '1',
    violations: 'Violations: ',
    vionum: '3',
    traffic: 'Traffic: ',
    trafficlevel: 'High',
    path: '/dashboard',
  },
  {
    icon: <UserOutlined className="senderlogo" />,
    name: 'Location 2',
    patrols: 'Patrols: ',
    patnum: '1',
    accidents: 'Accidents: ',
    accnum: '2',
    violations: 'Violations: ',
    vionum: '4',
    traffic: 'Traffic: ',
    trafficlevel: 'High',
    path: '/dashboard',
  },
  {
    icon: <UserOutlined className="senderlogo" />,
    name: 'Location 3',
    patrols: 'Patrols: ',
    patnum: '2',
    accidents: 'Accidents: ',
    accnum: '3',
    violations: 'Violations: ',
    vionum: '5',
    traffic: 'Traffic: ',
    trafficlevel: 'Low',
    path: '/dashboard',
  },
  {
    icon: <UserOutlined className="senderlogo" />,
    name: 'Location 4',
    patrols: 'Patrols: ',
    patnum: '3',
    accidents: 'Accidents: ',
    accnum: '5',
    violations: 'Violations: ',
    vionum: '6',
    traffic: 'Traffic: ',
    trafficlevel: 'Medium',
    path: '/dashboard',
  },
];

function MapBox() {
  return (
    <>
      <Flex wrap gap="16px" style={{ width: '771px' }}>
        {location.map((locations) => (
          <motion.div
            className="mapbox"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Flex gap="small">
              <MessageFilled className="logo" />
              <h1 class="cardheader">{locations.name}</h1>
            </Flex>
            <motion.div
              className="msg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link to={locations.path}>
                <Flex align="center">
                  <div class="sidemap"></div>
                  <div class="msgcontent">

                    <p class="locheader">
                      {locations.patrols}
                      {locations.patnum}
                    </p>
                    <p class="locheader">
                      {locations.accidents}
                      {locations.accnum}
                    </p>
                    <p class="locheader">
                      {locations.violations}
                      {locations.vionum}
                    </p>
                    <p class="locheader">
                      {locations.traffic}
                      {locations.trafficlevel}
                    </p>
                  </div>
                </Flex>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </Flex>
    </>
  );
}

export default MapBox;
