import * as React from 'react';

interface DashBoardProps {}

const DashBoard: React.FunctionComponent<DashBoardProps> = (props) => {
  return (
    <>
      <h2>DashBoard 111</h2>
    </>
  );
};

export default React.memo(DashBoard);
