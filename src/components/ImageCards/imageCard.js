import React from "react";

const imageCard = props => (
    <div>
       <img onClick={() => {props.reorder(props.name)}}src={props.image} className="img-thumbnail"></img>
    </div>
);

export default imageCard;