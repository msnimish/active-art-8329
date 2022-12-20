import React from "react";
import { TbHeartPlus } from "react-icons/tb";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../Redux/CartReducer/action";
import { useDispatch } from "react-redux";

import "./ProductCard.css";
import { StackItem } from "@chakra-ui/react";


const ProductCard = ({el}) => {
const navigate = useNavigate()
const dispatch = useDispatch()



    const handleAddToCart = ()=>{
if(el){
  dispatch(addToCart(el))
}
    }
   

    return (
        <>
            <div className="container">
                <img onClick={()=>navigate(`/single/${el._id}`)} src={el.image} alt="" />
                <TbHeartPlus size={30} className="heart" />
                {el.newBadge !== "" ? <div className="baz">{el.newBadge}</div> : null}

                {el.offBadge !== "" ? <div className="offBaz">
                    <p>{`${el.offBadge} % OFF`}</p>
                    <div className="edge"></div>
                </div> : null}


                <div className="details">
                    <div className="info">
                        <div className="price">
                            <h3>
                                <span>₹</span> {el.price}
                            </h3>
                            {el.strikedPrice !== "" ? <p><span>₹</span> {el.strikedPrice}</p> : null}
                        </div>
                        <p className="title">
                            {el.title}
                        </p>
                    </div>

                    <div className="cartDetails">
                        <div className="choice">
                            <div className="color">
                                <div className="colorImg">
                                    {false ? "Color" : <img src={el.image} alt="#" />}
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
                        <button onClick={handleAddToCart} className="addToCart">ADD TO BASKET</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
