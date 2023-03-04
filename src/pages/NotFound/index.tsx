import React, { memo } from 'react';

export interface NotFoundProps {}

function NotFound(props: NotFoundProps) {
  return (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}
export default memo(NotFound);
