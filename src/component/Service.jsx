import React, { useState } from 'react';
import { data } from './data';
import { Card } from './Card';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Service = () => {
  const [filters, setFilters] = useState({
    location: '',
    maxPrice: '',
    minBedrooms: '',
    minBathrooms: '',
  });

  const filteredProperties = data.filter((property) => {
    return (
      property.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.maxPrice === '' || property.price <= parseFloat(filters.maxPrice)) &&
      (filters.minBedrooms === '' || property.bedrooms >= parseInt(filters.minBedrooms)) &&
      (filters.minBathrooms === '' || property.bathrooms >= parseInt(filters.minBathrooms))
    );
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Our Services</h1>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Form.Control
              name="location"
              placeholder="Search Location"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Control
              name="maxPrice"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={handleFilterChange}
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Control
              name="minBedrooms"
              placeholder="Min Bedrooms"
              value={filters.minBedrooms}
              onChange={handleFilterChange}
            />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <Form.Control
              name="minBathrooms"
              placeholder="Min Bathrooms"
              value={filters.minBathrooms}
              onChange={handleFilterChange}
            />
          </Col>
        </Row>
        <Button
          variant="primary"
          className="mt-2"
          onClick={() => console.log(filteredProperties)}
        >
          Apply Filters
        </Button>
      </Container>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {filteredProperties.map((property, index) => (
                <Card
                  key={index}
                  imgsrc={property.imgsrc} 
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  amenities={property.amenities}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};







// _____________________________________________________________________________________

// import React, { useState } from 'react';
// import {data } from './data';
// // import PropertyList from './PropertyList';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// function App() {
//   const [filters, setFilters] = useState({
//     location: '',
//     maxPrice: '',
//     minBedrooms: '',
//     minBathrooms: '',
//   });

//   const filteredProperties = data.filter((property) => {
//     return (
//       property.location.includes(filters.location) &&
//       (filters.maxPrice === '' || property.price <= parseFloat(filters.maxPrice)) &&
//       (filters.minBedrooms === '' || property.bedrooms >= parseInt(filters.minBedrooms)) &&
//       (filters.minBathrooms === '' || property.bathrooms >= parseInt(filters.minBathrooms))
//     );
//   });

//   const handleFilterChange = (event) => {
//     const { name, value } = event.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   return (
//     <Container>
//       <h4 className="mt-4">Rent a Property</h4>
//       <Row className="mt-2">
//         <Col xs={12} sm={6} md={3}>
//           <Form.Control
//             name="location"
//             placeholder="Location"
//             value={filters.location}
//             onChange={handleFilterChange}
//           />
//         </Col>
//         <Col xs={12} sm={6} md={3}>
//           <Form.Control
//             name="maxPrice"
//             placeholder="Max Price"
//             value={filters.maxPrice}
//             onChange={handleFilterChange}
//           />
//         </Col>
//         <Col xs={12} sm={6} md={3}>
//           <Form.Control
//             name="minBedrooms"
//             placeholder="Min Bedrooms"
//             value={filters.minBedrooms}
//             onChange={handleFilterChange}
//           />
//         </Col>
//         <Col xs={12} sm={6} md={3}>
//           <Form.Control
//             name="minBathrooms"
//             placeholder="Min Bathrooms"
//             value={filters.minBathrooms}
//             onChange={handleFilterChange}
//           />
//         </Col>
//       </Row>
//       <Button variant="primary" className="mt-2" onClick={() => console.log(filteredProperties)}>
//         Apply Filters
//       </Button>
//       <PropertyList properties={filteredProperties} />
//     </Container>
//   );
// }

// export default App;



// import React from 'react'
// import { Card } from './Card'
// import {data} from './data'
// export const Service = () => {
//   return (
//     <>
//       <div className='my-5'>
//         <h1 className='text-center'> Our Services</h1>
//       </div>
//       <div className='container-fluid mb-5'>
//         <div className='row'>
//           <div className='col-10 mx-auto'>
//             <div className='row gy-4' >
//             {data.map( (ele, index) =>  { 
//               return <Card  key={index} imgsrc={ele.imgsrc} title={ele.title}
//               location={ele.location}
//               price={ele.price}
//               bedrooms={ele.bedrooms}
//               bathrooms={ele.bathrooms}
//               amenities={ele.amenities}
//               />
//             })}
                   
//                   </div>
//                 </div>
//               </div>
//             </div>
//    </>
//   )
// }