import React from "react";

const HelpFrame =(props)=>{
    const {img, name} = props
    return (
        <>
            <div className="sticker">
                <img src={img} alt="" />
              </div>
              <p>{name}</p>
        </>
    )
}
export default HelpFrame;
