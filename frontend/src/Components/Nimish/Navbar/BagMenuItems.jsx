import { MenuGroup, MenuItem } from "@chakra-ui/react";
import styled from "styled-components";

export const BeautyMenuItemsWrapper = styled.div`
  width: 100vw;
  marign: auto;

  .container {
    width: 70vw;
    display: flex;
    margin: auto;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    padding: 20px 0px;
  }
  .Box {
    border-left: 1px solid #c7c7c7;
    font-size: 14px;
  }
  .item:hover {
    color: #faa619;
    // font-size: 15px;
    background-color: transparent;
    transition: 0.1s;
  }
`;
export const BagMenuItems = () => {
  return (
    <BeautyMenuItemsWrapper>
      <div className="container">
        <div className="Box">
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Women</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Ballerinas</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Flip flops & Sliders</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Flat Sandals</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Flat Casual Shoes</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Heel Sandals</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Heel Shoes</p>
            </MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Women Top Brands</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Ginger</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Skechers</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Code</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Catwalk</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Melange</p>
            </MenuItem>
          </MenuGroup>
        </div>
        <div className="Box">
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Men</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Loafers & Moccasin</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Slip-Ons</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Sports Shoes</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Lace up</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Slippers and Sliders</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Floaters & Sandals</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Boots</p>
            </MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Men Top Brands</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Skechers</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Forca</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Code</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Puma</p>
            </MenuItem>
            <MenuItem>
              <p className="item">U.S. Polo Assn.</p>
            </MenuItem>
          </MenuGroup>
        </div>
        <div className="Box">
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Boys</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Shoes</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Sandals</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Slippers</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Boots</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Socks</p>
            </MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Girls</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Shoes</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Sandals</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Slippers</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Boots</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Socks</p>
            </MenuItem>
          </MenuGroup>
        </div>
        <div className="Box">
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Women Accessories</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Handbags</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Backpack</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Slings & Clutches</p>{" "}
            </MenuItem>
            <MenuItem>
              <p className="item">Wallets</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Totes</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Laptop Bags</p>{" "}
            </MenuItem>
            <MenuItem>
              <p className="item">Pouch & Vanity case</p>{" "}
            </MenuItem>
            <MenuItem>
              <p className="item">Belts</p>{" "}
            </MenuItem>
            <MenuItem>
              <p className="item">Masks</p>{" "}
            </MenuItem>
            <MenuItem>
              <p className="item">Socks</p>{" "}
            </MenuItem>
            <MenuItem>
              <p className="item">Fashion Jewellery</p>{" "}
            </MenuItem>
          </MenuGroup>
        </div>
        <div className="Box">
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Men Accessories</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Backpack</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Wallet</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Belts</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Masks</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Socks</p>
            </MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Essential</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Flip Flops</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Multiutility Bags</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Masks</p>
            </MenuItem>
          </MenuGroup>
        </div>
        <div className="Box">
          <MenuGroup>
            <MenuItem fontWeight="800" mt={"20px"}>
              <p className="item">Price Store</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Men Footwear under 999</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Women Footwear under 799</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Women Bags under 699</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Boys Footwear under 599</p>
            </MenuItem>
            <MenuItem>
              <p className="item">Girls Footwear under 599</p>
            </MenuItem>
          </MenuGroup>
        </div>
      </div>
    </BeautyMenuItemsWrapper>
  );
};
