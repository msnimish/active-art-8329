import { MenuGroup, MenuItem } from "@chakra-ui/react";
import styled from "styled-components";

export const KidsMenuItemsWrapper = styled.div`
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
export const KidsMenuItems = () => {
    return (
        <KidsMenuItemsWrapper>
            <div className = "container">
                <div className="Box">
                    <MenuGroup className="Group">
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Boys</p></MenuItem>
                        <MenuItem><p className="item">T-Shirts/Polos</p></MenuItem>
                        <MenuItem><p className="item">Shirts</p></MenuItem>
                        <MenuItem><p className="item">Jeans</p></MenuItem>
                        <MenuItem><p className="item">Shorts</p></MenuItem>
                        <MenuItem><p className="item">Trackpants & Joggers</p></MenuItem>
                        <MenuItem><p className="item">Sweatshirts & hoodies</p></MenuItem>
                        <MenuItem><p className="item">Pants</p></MenuItem>
                        <MenuItem><p className="item">Clothing Sets</p></MenuItem>
                        <MenuItem><p className="item">Jackets & Waistcoat</p></MenuItem>
                        <MenuItem><p className="item">Innerwear</p></MenuItem>
                        <MenuItem><p className="item">Ethnic Wear</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Girls</p></MenuItem>
                        <MenuItem><p className="item">Tops & Tees</p></MenuItem>
                        <MenuItem><p className="item">Dresses/Jumpsuits</p></MenuItem>
                        <MenuItem><p className="item">Clothing Sets</p></MenuItem>
                        <MenuItem><p className="item">Jeans</p></MenuItem>
                        <MenuItem><p className="item">Knit Bottoms</p></MenuItem>
                        <MenuItem><p className="item">Innerwear</p></MenuItem>
                        <MenuItem><p className="item">Shorts & Skirts</p></MenuItem>
                        <MenuItem><p className="item">TrackPants / Joggers</p></MenuItem>
                        <MenuItem><p className="item">Ethnic Wear</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Top Brands</p></MenuItem>
                        <MenuItem><p className="item">Fame forever</p></MenuItem>
                        <MenuItem><p className="item">Juniors</p></MenuItem>
                        <MenuItem><p className="item">Melange</p></MenuItem>
                        <MenuItem><p className="item">Bossini</p></MenuItem>
                        <MenuItem><p className="item">Mini Klub</p></MenuItem>
                        <MenuItem><p className="item">Allen Solly</p></MenuItem>
                        <MenuItem><p className="item">United Colors Of Benetton</p></MenuItem>
                        <MenuItem><p className="item">Lee Cooper Juniors</p></MenuItem>
                        <MenuItem><p className="item">Pepe Jeans</p></MenuItem>
                        <MenuItem><p className="item">U.S. Polo Assn.</p></MenuItem>
                        <MenuItem><p className="item">Peppermint</p></MenuItem>
                        <MenuItem><p className="item">Gini & Jony</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Accessories</p></MenuItem>
                        <MenuItem><p className="item">Face Masks</p></MenuItem>
                        <MenuItem><p className="item">Hair accessories</p></MenuItem>
                        <MenuItem><p className="item">Caps & Hats</p> </MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Price point Store</p></MenuItem>
                        <MenuItem><p className="item">Under 299</p></MenuItem>
                        <MenuItem><p className="item">Under 399</p></MenuItem>
                        <MenuItem><p className="item">Under 499</p></MenuItem>
                        <MenuItem><p className="item">Under 599</p></MenuItem>
                        <MenuItem><p className="item">Under 699</p></MenuItem>
                        <MenuItem><p className="item">Under 799</p> </MenuItem>
                    </MenuGroup>                
                </div>                
                <div className="Box">                    
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Age Store</p></MenuItem>
                        <MenuItem><p className="item">0-2 yrs</p></MenuItem>
                        <MenuItem><p className="item">2-4 yrs</p></MenuItem>
                        <MenuItem><p className="item">4-6 yrs</p></MenuItem>
                        <MenuItem><p className="item">6-10 yrs</p></MenuItem>
                        <MenuItem><p className="item">10-13 yrs</p></MenuItem>
                        <MenuItem><p className="item">13-16 yrs</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Shop Boys Footwear</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Shop Girls Footwear</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Character Shop</p></MenuItem>
                        <MenuItem><p className="item">Boys Character shop</p></MenuItem>
                        <MenuItem><p className="item">Girls Character shop</p></MenuItem>
                    </MenuGroup>
                </div>
            </div>
        </KidsMenuItemsWrapper>
    )
}
