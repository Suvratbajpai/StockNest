import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-5 p-5">
                <img src={imageURL}/>
            </div>
            <div className="col-2"></div>
            <div className="col-5 p-5 mt-5" >
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                    <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"7.2rem", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="mt-3">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"3rem"}}><img src="media/images/appStoreBadge.svg"/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;