import React, { memo } from 'react';

export interface CheckoutPageProps {}

function CheckoutPage(props: CheckoutPageProps) {
  return (
    <div>
      <h1>Checkout Page</h1>
    </div>
  );
}
export default memo(CheckoutPage);
