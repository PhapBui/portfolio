import React, { memo } from 'react';

export interface AboutPageProps {}

function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
export default memo(AboutPage);
