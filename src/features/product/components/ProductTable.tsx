import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ProductDetails } from 'models/product';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { getQuantilyColor } from 'utils/common';
import { currency } from 'utils/currency';
import { createSlug } from 'utils/slug';

export interface ProductTableProps {
  productList: ProductDetails[];
  onEdit?: (product: ProductDetails) => void;
  onRemove?: (product: ProductDetails) => void;
}

function ProductTable({ productList, onEdit, onRemove }: ProductTableProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<ProductDetails>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (product: ProductDetails) => {
    setSelectedProduct(product);
    handleClickOpen();
  };
  const handleRemoveConfirm = (product: ProductDetails) => {
    if (!onRemove) return;
    onRemove(product);
    handleClose();
  };

  const handleEditClick = (product: ProductDetails) => {
    onEdit?.(product);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 520 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Qty</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center" sx={{ display: { lg: 'table-cell', xs: 'none' } }}>
                Discount
              </TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, idx) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="left">
                  <Link to={`/product/${createSlug(product.name, product.id)}`}>
                    {product.name}
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <Box color={getQuantilyColor(product.quantity)}>{product.quantity}</Box>
                </TableCell>
                <TableCell align="center">{currency(+product.price)}</TableCell>
                <TableCell align="center" sx={{ display: { lg: 'table-cell', xs: 'none' } }}>
                  <Box color={getQuantilyColor(100 - product.discount)}> {product.discount}</Box>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveClick(product)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Comfirm remove product?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove this product- {selectedProduct?.name}. This action can't be undo
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveConfirm(selectedProduct as ProductDetails)}
            variant="contained"
            color="secondary"
            autoFocus
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default memo(ProductTable);
