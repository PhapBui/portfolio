import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ProductDetails } from 'models/product';

interface CartState {
  listItem: ProductDetails[];
  loading: boolean;
}

const initialState: CartState = {
  listItem: [],
  loading: false,
};

const checkProductInCart = (arr: ProductDetails[], action: PayloadAction<ProductDetails>) => {
  if (!arr) return;

  return arr.find((p) => p.id === action.payload.id);
};

const indexProduct = (arr: ProductDetails[], action: PayloadAction<ProductDetails>) => {
  if (!arr) return;
  return arr.findIndex((obj) => obj.id === action.payload.id);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.loading = true;
    },
    addToCartSuccess(state, action: PayloadAction<ProductDetails>) {
      const productInCart = checkProductInCart(state.listItem, action);
      if (!productInCart) {
        state.listItem = [...state.listItem, action.payload];
      } else {
        const objIndex: any = indexProduct(state.listItem, action);

        if (objIndex === undefined) {
          state.listItem[objIndex].quantity = +action.payload.quantity;
        } else {
          state.listItem[objIndex].quantity += +action.payload.quantity;
        }
      }

      state.loading = false;
    },

    addToCartListFailed(state, action) {
      state.loading = false;
    },

    updateItemQty(state, action) {
      state.loading = true;
    },
    updateItemQtySuccess(state, action) {
      const objIndex: any = indexProduct(state.listItem, action);
      state.listItem[objIndex].quantity = +action.payload.quantity;

      state.loading = false;
    },

    removeProductInCart(state, action) {
      state.listItem.splice(action.payload, 1);
    },
    emptyCart: (state) => {
      console.log('dispatch cartEmpty');

      state.listItem = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart.listItem;

const cartReducer = cartSlice.reducer;
export default cartReducer;
