
// src/App.js
import React, { useState } from "react";
import { properties } from "./data";
import PropertyList from "./PropertyList";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";

function App() {
  const [filters, setFilters] = useState({
    location: "",
    maxPrice: "",
    minBedrooms: "",
    minBathrooms: "",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      property.location.includes(filters.location) &&
      (filters.maxPrice === "" || property.price <= parseFloat(filters.maxPrice)) &&
      (filters.minBedrooms === "" || property.bedrooms >= parseInt(filters.minBedrooms)) &&
      (filters.minBathrooms === "" || property.bathrooms >= parseInt(filters.minBathrooms))
    );
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rent a Property
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="location"
            label="Location"
            variant="outlined"
            fullWidth
            value={filters.location}
            onChange={handleFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="maxPrice"
            label="Max Price"
            variant="outlined"
            fullWidth
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="minBedrooms"
            label="Min Bedrooms"
            variant="outlined"
            fullWidth
            value={filters.minBedrooms}
            onChange={handleFilterChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            name="minBathrooms"
            label="Min Bathrooms"
            variant="outlined"
            fullWidth
            value={filters.minBathrooms}
            onChange={handleFilterChange}
          />
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => console.log(filteredProperties)}>
        Apply Filters
      </Button>
      <PropertyList properties={filteredProperties} />
    </Container>
  );
}

export default App;




// import React from "react";
// import { properties } from "./data";
// import PropertyList from "./PropertyList";

// function App() {
//   return (
//     <div>
//       <h1>Rent a Property</h1>
//       <PropertyList properties={properties} />
//     </div>
//   );
// }

// export default App;
// ______________________________________


// import './App.css';

// function App() {
//   return (
//    <h1>Hello Shweta you are the best</h1>
//   );
// }

// export default App;