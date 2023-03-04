import React, { memo } from 'react';

export interface ProductPageProps {}
function ProductPage(props: ProductPageProps) {
  return <div>ProductPage</div>;
}

export default memo(ProductPage);
