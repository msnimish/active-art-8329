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
export const BeautyMenuItems = () => {
    return (
        <BeautyMenuItemsWrapper>
            <div className = "container">
                <div className="Box">
                    <MenuGroup className="Group">
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Lips</p></MenuItem>
                        <MenuItem><p className="item">Lipstick</p></MenuItem>
                        <MenuItem><p className="item">Liquid Lipstick</p></MenuItem>
                        <MenuItem><p className="item">Lip Crayon</p></MenuItem>
                        <MenuItem><p className="item">Lip GLoss</p></MenuItem>
                        <MenuItem><p className="item">Lip Liner</p></MenuItem>
                        <MenuItem><p className="item">Lip Balm</p></MenuItem>
                        <MenuItem><p className="item">Lip Stain</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Face</p></MenuItem>
                        <MenuItem><p className="item">Face Primer</p></MenuItem>
                        <MenuItem><p className="item">Concealer</p></MenuItem>
                        <MenuItem><p className="item">Foundation</p></MenuItem>
                        <MenuItem><p className="item">Compact Powder</p></MenuItem>
                        <MenuItem><p className="item">Blush & Highlighter</p></MenuItem>
                        <MenuItem><p className="item">BB & CC Cream</p></MenuItem>
                        <MenuItem><p className="item">Make Remover</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Eyes</p></MenuItem>
                        <MenuItem><p className="item">Kajal</p></MenuItem>
                        <MenuItem><p className="item">Eyeliner</p></MenuItem>
                        <MenuItem><p className="item">Mascara</p></MenuItem>
                        <MenuItem><p className="item">Eye Shadow</p></MenuItem>
                        <MenuItem><p className="item">Eyebrow</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Nails</p></MenuItem>
                        <MenuItem><p className="item">Nail Polish</p></MenuItem>
                        <MenuItem><p className="item">Nail Polish Remover</p></MenuItem>
                        <MenuItem><p className="item">Nail Tools</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Skin Care</p></MenuItem>
                        <MenuItem><p className="item">Moisturizer</p></MenuItem>
                        <MenuItem><p className="item">Sunscreen</p></MenuItem>
                        <MenuItem><p className="item">Face Wash</p> </MenuItem>
                        <MenuItem><p className="item">Masks</p></MenuItem>
                        <MenuItem><p className="item">Serum</p></MenuItem>
                        <MenuItem><p className="item">Eye Cream</p> </MenuItem>
                        <MenuItem><p className="item">Hand Care</p> </MenuItem>
                        <MenuItem><p className="item">Body Lotions</p> </MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Bath & Body</p></MenuItem>
                        <MenuItem><p className="item">Soaps</p></MenuItem>
                        <MenuItem><p className="item">Shower Gel</p></MenuItem>
                        <MenuItem><p className="item">Scrub</p></MenuItem>
                        <MenuItem><p className="item">Wipes</p></MenuItem>
                        <MenuItem><p className="item">Sanitisers</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Fragrances</p></MenuItem>
                        <MenuItem><p className="item">Deodorants</p></MenuItem>
                        <MenuItem><p className="item">Perfumes</p></MenuItem>
                        <MenuItem><p className="item">Sets</p></MenuItem>
                    </MenuGroup>
                </div>
                <div className="Box">
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Tools & Accessories</p></MenuItem>
                        <MenuItem><p className="item">Makeup Brushes</p></MenuItem>
                        <MenuItem><p className="item">Face Tool</p></MenuItem>
                        <MenuItem><p className="item">Makeup Pouches</p></MenuItem>
                    </MenuGroup>
                    <MenuGroup>
                        <MenuItem fontWeight="800" mt={"20px"}><p className="item">Men Grooming</p></MenuItem>
                        <MenuItem><p className="item">Face Wash</p></MenuItem>
                        <MenuItem><p className="item">Skin Care</p></MenuItem>
                        <MenuItem><p className="item">Hair Care</p></MenuItem>
                        <MenuItem><p className="item">Beard Care</p></MenuItem>
                        <MenuItem><p className="item">Bath & Body</p></MenuItem>
                    </MenuGroup>
                </div>
            </div>
        </BeautyMenuItemsWrapper>
    )
}
