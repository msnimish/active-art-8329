import React from "react";
import { TbHeartPlus } from "react-icons/tb";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

import "./ProductCard.css";
import { StackItem } from "@chakra-ui/react";

const ProductCard = ({ _id, title, price, strikedPrice, newBadge, offBadge, image}) => {
const navigate = useNavigate()

    const handleAddToCart = ()=>{

    }
   

    return (
        <>
            <div className="container">
                <img onClick={()=>navigate(`/single`)} src={image} alt="" />
                <TbHeartPlus size={30} className="heart" />
                {newBadge !== "" ? <div className="baz">{newBadge}</div> : null}

                {offBadge !== "" ? <div className="offBaz">
                    <p>{`${offBadge} % OFF`}</p>
                    <div className="edge"></div>
                </div> : null}


                <div className="details">
                    <div className="info">
                        <div className="price">
                            <h3>
                                <span>₹</span> {price}
                            </h3>
                            {strikedPrice !== "" ? <p><span>₹</span> {strikedPrice}</p> : null}
                        </div>
                        <p className="title">
                            {title}
                        </p>
                    </div>

                    <div className="cartDetails">
                        <div className="choice">
                            <div className="color">
                                <div className="colorImg">
                                    {false ? "Color" : <img src={image} alt="#" />}
                                </div>
                                <div>
                                    {false ? (
                                        <p></p>
                                    ) : (
                                        <p style={{ opacity: ".3" }}>Select Color</p>
                                    )}
                                </div>
                            </div>
                            <div className="size">
                                {false ? <p></p> : <p style={{ opacity: ".3" }}>Select Size</p>}
                                <MdKeyboardArrowUp />
                            </div>
                        </div>
                        <Link to={handleAddToCart}><button className="addToCart">ADD TO BASKET</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
