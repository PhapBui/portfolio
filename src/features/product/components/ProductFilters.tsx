import { Search } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { memo } from 'react';

function ProductFilters() {
  return (
    <Box>
      <Grid
        container
        spacing={3}
      >
        {/* Search */}
        <Grid
          item
          xs={12}
          md={6}
        >
          <FormControl
            fullWidth
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="searchByName">Search by Name</InputLabel>
            <OutlinedInput
              id="searchByName"
              endAdornment={<Search />}
            />
          </FormControl>
        </Grid>
        {/* Filter by Category */}
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
        >
          <FormControl
            fullWidth
            size="small"
            variant="outlined"
          >
            <InputLabel id="filterByCity">Filter by City</InputLabel>
            <Select
              labelId="filterByCity"
              label="Filter by City"
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>

              <MenuItem></MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Sort */}
        <Grid
          item
          xs={12}
          md={6}
          lg={2}
        >
          <FormControl
            fullWidth
            size="small"
            variant="outlined"
          >
            <InputLabel id="sortBy">Sort</InputLabel>
            <Select
              labelId="sortBy"
              label="Sort"
            >
              <MenuItem value="">
                <em>No sort</em>
              </MenuItem>
              <MenuItem value="name.asc">Name ASC</MenuItem>
              <MenuItem value="name.desc">Name DESC</MenuItem>
              <MenuItem value="mark.asc">Mark ASC</MenuItem>
              <MenuItem value="mark.desc">Mark DESC</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={1}
        >
          <Button
            variant="outlined"
            color="primary"
            fullWidth
          >
            Clear Filter
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(ProductFilters);
