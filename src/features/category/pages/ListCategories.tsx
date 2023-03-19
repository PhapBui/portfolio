// import studentApi from 'api/studentApi';
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
import { CategoryDetails } from 'models/product';
import { memo, useState } from 'react';
import { getQuantilyColor } from 'utils/common';

export interface CategoryTableProps {
  categoryList: CategoryDetails[];
  onEdit?: (category: CategoryDetails) => void;
  onRemove?: (category: CategoryDetails) => void;
}

function ListCategoryPage({ categoryList, onEdit, onRemove }: CategoryTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<CategoryDetails>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveClick = (category: CategoryDetails) => {
    setSelectedStudent(category);
    handleClickOpen();
  };
  const handleRemoveConfirm = (category: CategoryDetails) => {
    if (!onRemove) return;
    onRemove(category);
    handleClose();
  };

  const handleEditClick = (category: CategoryDetails) => {
    onEdit?.(category);
  };

  return (
    <Box>
      <>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Product Qty</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryList.map((category, idx) => (
                <TableRow key={category.categoryId}>
                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {category.categoryId}
                  </TableCell>
                  <TableCell align="left">{category.name}</TableCell>
                  <TableCell align="left">
                    <Box color={getQuantilyColor(category.productQty)}>{category.productQty}</Box>
                  </TableCell>

                  <TableCell align="center">{category?.description}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEditClick(category)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveClick(category)}
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
          <DialogTitle id="alert-dialog-title">{'Comfirm remove category?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to remove this category- {selectedStudent?.name}. This action can't be
              undo
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="outlined"
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => handleRemoveConfirm(selectedStudent as CategoryDetails)}
              variant="contained"
              color="secondary"
              autoFocus
            >
              Remove
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Box>
  );
}
export default memo(ListCategoryPage);
