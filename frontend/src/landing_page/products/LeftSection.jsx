import React from "react";
import './css/LeftSection.css';

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container ">
    <div className="row">
        <div className="col-5 p-5">
         <img src={imageURL} alt="" style={{padding:"0  0 0 30px"}} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5">
           <h2 className="mt-3">{productName}</h2>
           <p className="text-muted col-10 fs-6 mt-3">{productDescription}</p>
           <a href={tryDemo}>Try Demo →</a>
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
           <a href={learnMore}>Learn More →</a>
           <div className="links mt-3">
           <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="" /></a>
           &nbsp; &nbsp; &nbsp; &nbsp;
           <a href={appStore}><img src="media\images\appstoreBadge.svg" alt="" /></a>
           </div>
        </div>
    </div>
  </div>;
}

export default LeftSection;
