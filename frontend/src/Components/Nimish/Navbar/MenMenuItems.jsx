import { MenuGroup, MenuItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const BeautyMenuItemsWrapper = styled.div`
    width: 100vw;
    marign:auto;

    .container{
        width: 70vw;
        display: flex;
        margin:auto;
        flex-direction: row;
        gap: 10px;
        justify-content: space-between;
        padding: 20px 0px;
    }
    .Box{
        border-left: 1px solid #c7c7c7;
        font-size: 14px;
    }
    .item:hover{    
        color: #FAA619;
        // font-size: 15px;
        background-color: transparent;
        transition: 0.1s;
    }
`
export const MenMenuItems = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/products");
    }
    return (
        <BeautyMenuItemsWrapper>
            <div className = "container">
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Topwear</p></MenuItem>
                        <MenuItem onClick={handleClick}><p className="item">Casual Shirts</p></MenuItem>
                        <MenuItem><p className="item">Formal Shirts</p></MenuItem>
                        <MenuItem><p className="item">Polos</p></MenuItem>
                        <MenuItem><p className="item">T-Shirts</p></MenuItem>
                        <MenuItem><p className="item">Jackets</p></MenuItem>
                        <MenuItem><p className="item">Hoodies & Sweatshirts</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Bottomwear</p></MenuItem>
                        <MenuItem><p className="item">Casual Trouses</p></MenuItem>
                        <MenuItem><p className="item">Formal Trouses</p></MenuItem>
                        <MenuItem><p className="item">Jeans</p></MenuItem>
                        <MenuItem><p className="item">Track Pants</p></MenuItem>
                        <MenuItem><p className="item">Shorts & 3/4ths</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Activewear</p></MenuItem>
                        <MenuItem><p className="item">Polos</p></MenuItem>
                        <MenuItem><p className="item">Sports T-Shirts</p></MenuItem>
                        <MenuItem><p className="item">Track Pants</p></MenuItem>
                        <MenuItem><p className="item">Sports Shoes</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Ethnic</p></MenuItem>
                        <MenuItem><p className="item">Kurtas</p></MenuItem>
                        <MenuItem><p className="item">Waistcoats</p></MenuItem>
                        <MenuItem><p className="item">Pyjamas</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Winterwear</p></MenuItem>
                        <MenuItem><p className="item">Hooodies</p></MenuItem>
                        <MenuItem><p className="item">Sweaters & Cardigans</p></MenuItem>
                        <MenuItem><p className="item">Jackets</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Innerwear</p></MenuItem>
                        <MenuItem><p className="item">Boxers</p></MenuItem>
                        <MenuItem><p className="item">Briefs</p></MenuItem>
                        <MenuItem><p className="item">Vests</p></MenuItem>
                        <MenuItem><p className="item">Loungewear</p></MenuItem>
                        <MenuItem><p className="item">Socks</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Top Brands</p></MenuItem>
                        <MenuItem><p className="item">US Polo</p></MenuItem>
                        <MenuItem><p className="item">Fahrenheit</p></MenuItem>
                        <MenuItem><p className="item">Jack & Jones</p></MenuItem>
                        <MenuItem><p className="item">Levis</p></MenuItem>
                        <MenuItem><p className="item">United Colors Of Benetton</p></MenuItem>
                        <MenuItem><p className="item">Celio</p></MenuItem>
                        <MenuItem><p className="item">Kappa</p></MenuItem>
                        <MenuItem><p className="item">Bossini</p></MenuItem>
                        <MenuItem><p className="item">CODE</p></MenuItem>
                        <MenuItem><p className="item">FameForever</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Watches</p></MenuItem>
                        <MenuItem><p className="item">Digital Watches</p></MenuItem>
                        <MenuItem><p className="item">Analog Watches</p></MenuItem>
                        <MenuItem><p className="item">Automatic Watches</p> </MenuItem>
                        <MenuItem><p className="item">Chronograph watches</p></MenuItem>
                        <MenuItem><p className="item">Multi Function Watches</p></MenuItem>
                        <MenuItem><p className="item">Smart Watches</p> </MenuItem>
                        <MenuItem><p className="item">Fitness Trackers</p> </MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Sunglasses</p></MenuItem>
                        <MenuItem><p className="item">Aviator</p></MenuItem>
                        <MenuItem><p className="item">Wayfarer</p></MenuItem>
                        <MenuItem><p className="item">Square</p> </MenuItem>
                        <MenuItem><p className="item">Sporty</p></MenuItem>
                        <MenuItem><p className="item">Rectangle</p></MenuItem>
                        <MenuItem><p className="item">Round</p> </MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Shoes</p></MenuItem>
                        <MenuItem><p className="item">Loafers & Moccasin</p></MenuItem>
                        <MenuItem><p className="item">Slip-Ons</p></MenuItem>
                        <MenuItem><p className="item">Sports Shoes</p></MenuItem>
                        <MenuItem><p className="item">Lace up</p></MenuItem>
                        <MenuItem><p className="item">Slippers and Sliders</p></MenuItem>
                        <MenuItem><p className="item">Floaters & Sandals</p></MenuItem>
                        <MenuItem><p className="item">Boots</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Grooming</p></MenuItem>
                        <MenuItem><p className="item">Fragrances</p></MenuItem>
                        <MenuItem><p className="item">Face Wash</p></MenuItem>
                        <MenuItem><p className="item">Skin Care</p></MenuItem>
                        <MenuItem><p className="item">Hair Care</p></MenuItem>
                        <MenuItem><p className="item">Beard Care</p></MenuItem>
                        <MenuItem><p className="item">Bath & Body</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Add-ons</p></MenuItem>
                        <MenuItem><p className="item">Wallets</p></MenuItem>
                        <MenuItem><p className="item">Ties</p></MenuItem>
                        <MenuItem><p className="item">Belts</p></MenuItem>
                        <MenuItem><p className="item">Socks</p></MenuItem>
                    </MenuGroup>
                </div>
            </div>
        </BeautyMenuItemsWrapper>
    )
}
