// src/PropertyList.js
import React from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map((property) => (
        <Card key={property.id} variant="outlined" sx={{ margin: "16px" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {property.title}
            </Typography>
            <Typography color="text.secondary">Location: {property.location}</Typography>
            <Typography color="text.secondary">Price: ${property.price}</Typography>
            <Typography color="text.secondary">Bedrooms: {property.bedrooms}</Typography>
            <Typography color="text.secondary">Bathrooms: {property.bathrooms}</Typography>
            <Typography color="text.secondary">
              Amenities: {property.amenities.join(", ")}
            </Typography>
            <div>
              {property.amenities.map((amenity) => (
                <Chip key={amenity} label={amenity} variant="outlined" sx={{ margin: "2px" }} />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PropertyList;






// // src/PropertyList.js
// import React from "react";

// const PropertyList = ({ properties }) => {
//   return (
//     <div>
//       {properties.map((property) => (
//         <div key={property.id}>
//           <h2>{property.title}</h2>
//           <p>Location: {property.location}</p>
//           <p>Price: ${property.price}</p>
//           <p>Bedrooms: {property.bedrooms}</p>
//           <p>Bathrooms: {property.bathrooms}</p>
//           <p>Amenities: {property.amenities.join(", ")}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PropertyList;
