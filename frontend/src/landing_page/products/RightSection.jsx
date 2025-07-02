import React from 'react';
import './css/RightSection.css';

function RightSection({
    imageURL,
    productName,
    productDescription,
    linkTag
}) {
    return ( 
        <div className="container">
            <div className="row p-5 ">
                <div className="col-6 p-5 mt-5 text-section">
                     <h2 >{productName}</h2>
                     <p className="text-muted col-8 fs-6 ">{productDescription}</p>
                     <a href="/">{linkTag} →</a>
                </div>
                
                <div className="col-6 image">
                  <img src={imageURL} alt="" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;