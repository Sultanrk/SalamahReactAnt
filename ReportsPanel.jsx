import './ReportsPanel.css'
import '../../App.css';
import { motion } from 'framer-motion';
import { Flex, Table, Tag, Space } from 'antd';
import {
  SnippetsFilled
} from '@ant-design/icons';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 70,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Accident') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>{record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    id: 12,
    name: 'John Brown',
    address: 'New York No. 1 Lake Park',
    tags: ['Accident'],
  },
  {
    key: '2',
    id: 32,
    name: 'Jim Green',
    address: 'London No. 1 Lake Park',
    tags: ['Accident'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
  {
    key: '3',
    id: 43,
    name: 'Joe Black',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Violation'],
  },
];

function ReportsPanel() {

  return (
    <>
    <motion.div
      className="reports"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Flex gap="small">
          <SnippetsFilled className="logo" />
          <h1 class="cardheader">Reports</h1>
      </Flex>
      <div>
          <Table scroll={{ y: 500 }} className="reportstable" columns={columns} dataSource={data} />
      </div>
    </motion.div>
    </>
  )
}

export default ReportsPanel