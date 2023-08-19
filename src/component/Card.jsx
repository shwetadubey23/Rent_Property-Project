// import React from 'react';


// export const Card = (props) => {
//     return (
//         <>
//             <div className='col-md-4 col-10 mx-auto'>
//                 <div className="card">
//                     <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} style={{ height: "150px", objectFit: "fill" }} />
//                     <div className="card-body">
//                         <h5 className="card-title">{props.title}
//                             <p>{props.location}</p>
//          <div> <h6 className='card-text justify-center ms2'>Bedrooms: {props.bedrooms}</h6>
//           <h6 className='card-text d-inline h-100 fs-5 justify-center ms2'>Bathrooms: {props.bathrooms}</h6> 
//           </div>
//           <p className='card-text'>Amenities: {props.amenities.join(', ')}</p>
//                         </h5>

//                             <button className="btn btn-primary">Price: ${props.price}</button>

//                         {/* <Link to="" className="btn btn-primary">Go somewhere</Link> */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



// ____________________________
import React from 'react';

export const Card = (props) => {
    return (
        <div className='col-md-4 col-10 mx-auto'>
            <div className='card h-100'>
                <img
                    src={props.imgsrc}
                    className='card-img-top'
                    alt={props.imgsrc}
                    style={{ height: '150px', objectFit: 'cover' }}
                />
                <div className='card-body'>
                    <h5 className='card-title'><strong>{props.title} </strong> </h5>
                    <p className='card-text'>{props.location}</p>
                    <p className='card-text'>
                        <div>
                            <h5 className='text-primary'> ${props.price}</h5>
                        </div>
                        <strong>Amenities:</strong> {props.amenities.join(', ')}
                    </p>
                    <hr />
                    <div className='d-flex justify-content-between'>

                        <h6 className='card-text'>Bedrooms: {props.bedrooms}</h6>
                        <h6 className='card-text'>Bathrooms: {props.bathrooms}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};
