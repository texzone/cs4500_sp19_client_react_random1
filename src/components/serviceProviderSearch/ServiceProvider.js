import React from 'react';
const ServiceProvider = ({serviceProvider, indexKey}) =>
    <div className="row np-flex-wrap" key={indexKey}>
        <div>
            <img height="200" width="200" src={`https://picsum.photos/300/200?image=${Math.floor(Math.random() * 100)}`}  alt="..."/>
        </div>
        <div>
            <a href=""><h5>{ serviceProvider.name}</h5></a>
            {/*<div> { serviceProvider.reviews.length } </div>*/}
            <div> { serviceProvider.yearsInBusiness + " year in business," +  serviceProvider.hires + " hires"} </div>
        </div>
        <div>
            <div>{ serviceProvider.price }</div>
            <button className="btn btn-primary">View Profile</button>
        </div>
    </div>

export default ServiceProvider