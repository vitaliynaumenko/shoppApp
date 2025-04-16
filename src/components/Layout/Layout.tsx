import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = props => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
