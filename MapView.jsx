import './MapView.css';
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex } from 'antd';
import { HomeFilled, MessageFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { location } from './MapBox.jsx';

function MapView() {
  return (
    <>
      <motion.div
        className="Mapdes"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Flex gap="small">
          <HomeFilled className="logo" />
          <h1 class="cardheader">Dashboard</h1>
        </Flex>

        {location.map((locations) => (
          <motion.div
            className="msg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link to={locations.path}>
              <Flex align="center">
                <div class="dashcardmap">{locations.name}</div>
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
        ))}
      </motion.div>
    </>
  );
}

export default MapView;
