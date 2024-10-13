import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <div className="crumb">
    <Breadcrumb >
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {pathnames.map((path, index) => {
        const url = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <Breadcrumb.Item key={url}>
            <Link to={url}>{path.charAt(0).toUpperCase() + path.slice(1)}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;