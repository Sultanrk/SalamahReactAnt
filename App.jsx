import './App.css';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Upload } from 'antd';
import { Flex, Layout, Menu, ConfigProvider } from 'antd';
import Breadcrumbs from './components/Breadcrumb/breadcrumb';
import {
  HomeFilled,
  SnippetsFilled,
  ClockCircleFilled,
  ThunderboltFilled,
  CarOutlined,
  DashboardFilled,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { Dragger } = Upload;
const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
  background:
    'linear-gradient(160deg, rgba(91,146,205,1) 0%, rgba(121,255,139,1) 100%)',
  borderTopRightRadius: 20,
};
const items = [
  { key: '1', icon: <HomeFilled />, label: 'Home', path: '/home' },
  {
    key: '2',
    icon: <DashboardFilled />,
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    key: '3',
    icon: <ClockCircleFilled />,
    label: 'Activity',
    path: '/activity',
  },
  { key: '4', icon: <SnippetsFilled />, label: 'Reports', path: '/reports' },
  {
    key: '5',
    icon: <ThunderboltFilled />,
    label: 'AI Chatbot',
    className: 'aibutton',
    path: '/aichatbot',
  },
];

const App = () => {
  const location = useLocation();

  const [dateTime, setDateTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => setDateTime(moment()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'grey',
            colorTextBase: 'grey',
            fontFamily: 'REM',
          },
        }}
      >
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Sider style={siderStyle}>
            <div
              style={{
                margin: 20,
                marginLeft: 40,
                justifyContent: 'center',
              }}
            >
              <Link to="/home">
                <Flex gap="small">
                  <CarOutlined
                    style={{
                      color: 'white',
                      fontSize: 20,
                    }}
                  />
                  <h1
                    style={{
                      color: 'white',
                    }}
                  >
                    Salamah
                  </h1>
                </Flex>
              </Link>
            </div>

            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              style={{ padding: 10 }}
            >
              {items.map((item) => (
                <Menu.Item
                  key={item.key}
                  className={item.className}
                  style={{
                    height: 50,
                    marginBottom: 10,
                    borderRadius: 18,
                  }}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span style={{ marginLeft: 8 }}>{item.label}</span>
                  </Link>
                </Menu.Item>
              ))}

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Dragger
                  style={{
                    marginInlineStart: 4,
                    width: 170,
                    marginTop: 150,
                    color: 'rgba(68,159,244,1)',
                    background: 'rgba(255,255,255,0.3)',
                  }}
                >
                  <SnippetsFilled
                    style={{
                      marginTop: 15,
                      fontSize: 24,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 13,
                    }}
                  >
                    Click or drag file to this area to upload.
                  </p>
                </Dragger>
              </motion.div>
            </Menu>
          </Sider>
          <Layout
            style={{
              marginInlineStart: 200,
            }}
          >
            <Header
              style={{
                background: 'rgba(0, 0, 0, 0)',
                height: 60,
              }}
            >
              <Flex>
                <div>
                  <h1 className="wlcm">Welcome, Khaled</h1>
                  <Breadcrumbs/>
                </div>
                <div className="timedate">
                  <h2 className="time">{dateTime.format('HH:mm')}</h2>
                  <h2 className="date">{dateTime.format('MMMM Do, YYYY')}</h2>
                </div>
              </Flex>
            </Header>
            <Content>
              <div
                style={{
                  marginTop: 0,
                  margin: 16,
                  padding: 10,
                  background: '#fff',
                  borderRadius: 32,
                }}
              >
                <AnimatePresence>
                  <motion.div
                    key={location.key}
                    exit={{ opacity: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Outlet />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
};
export default App;
