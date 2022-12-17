import { MenuGroup, MenuItem } from "@chakra-ui/react";
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
export const WomenMenuItems = () => {
    return (
        <BeautyMenuItemsWrapper>
            <div className = "container">
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Ethnic & Fusion Wear</p></MenuItem>
                        <MenuItem><p className="item">Kurtas & Kurtis</p></MenuItem>
                        <MenuItem><p className="item">Kurta Sets</p></MenuItem>
                        <MenuItem><p className="item">Ethnic Dresses</p></MenuItem>
                        <MenuItem><p className="item">Tops & Tunics</p></MenuItem>
                        <MenuItem><p className="item">Leggings & Churidars</p></MenuItem>
                        <MenuItem><p className="item">Pants & Palazoos</p></MenuItem>
                        <MenuItem><p className="item">Skirts</p></MenuItem>
                        <MenuItem><p className="item">Dupattas & Stoles</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Western Wear</p></MenuItem>
                        <MenuItem><p className="item">Tops & Tees</p></MenuItem>
                        <MenuItem><p className="item">Dresses & Jumpsuits</p></MenuItem>
                        <MenuItem><p className="item">Jeans & Jeggings</p></MenuItem>
                        <MenuItem><p className="item">Shorts & Skirts</p></MenuItem>
                        <MenuItem><p className="item">Trousers</p></MenuItem>
                        <MenuItem><p className="item">Jackets & Shrugs</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Lingerie/Sleepwear</p></MenuItem>
                        <MenuItem><p className="item">Bras</p></MenuItem>
                        <MenuItem><p className="item">Briefs/Panties</p></MenuItem>
                        <MenuItem><p className="item">Cami & Slips</p></MenuItem>
                        <MenuItem><p className="item">Shapewear</p></MenuItem>
                        <MenuItem><p className="item">Nightwear</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Sportwear</p></MenuItem>
                        <MenuItem><p className="item">Tops & Tees</p></MenuItem>
                        <MenuItem><p className="item">Sports Bra</p></MenuItem>
                        <MenuItem><p className="item">Leggings</p></MenuItem>
                        <MenuItem><p className="item">Joggers & Tracks</p></MenuItem>
                        <MenuItem><p className="item">Sweatshirts & Jackets</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Top Brands</p></MenuItem>
                        <MenuItem><p className="item">Melanges</p></MenuItem>
                        <MenuItem><p className="item">Ginger</p></MenuItem>
                        <MenuItem><p className="item">Code</p> </MenuItem>
                        <MenuItem><p className="item">Fame Forever</p></MenuItem>
                        <MenuItem><p className="item">Kappa</p></MenuItem>
                        <MenuItem><p className="item">Biba</p> </MenuItem>
                        <MenuItem><p className="item">Aurelia</p> </MenuItem>
                        <MenuItem><p className="item">AND</p> </MenuItem>
                        <MenuItem><p className="item">Allen Solly</p> </MenuItem>
                    </MenuGroup>
                    
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Winter wear</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Beauty</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Footwear/Bags</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Watches</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Jewellery</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Fragrances</p></MenuItem>
                    </MenuGroup>
                </div>
            </div>
        </BeautyMenuItemsWrapper>
    )
}
