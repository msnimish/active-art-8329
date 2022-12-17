import styled from "styled-components";

export const NavbarWrapper = styled.div`
    width: 100vw;
    margin: auto !important;
    font-family: Proxima Nova;
    color: #1E1E1E;
    background-color: #f7f8f7;
    // box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    .NavbarContainer{
        width: 70vw;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        gap:30px;
        align-items: center;
        // padding-top: 10px;
        // padding-bottom: 10px;
        color: #1E1E1E;
    }
    .leftHalf{
        width: 70%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    .searchIcon{
        display:none;
    }
    .rightHalf{
        width: 25%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
    .leftHalf>InputGroup{
        background-color: #ECEDEB;
    }
    

    .noOfItems{
        font-size:10px;
        color: #fff;
        background: #FAA619;
        border-radius:50%;
        padding: 1px 5px;
        position:relative;
        left:-32px;
        top:-10px;
        opacity:0.9;
    }

    @media all and (max-width: 992px){
        .NavContainer{
            width:90%;
        }
        .rightHalf>Button{
            display: none;
        }
    }

    @media all and (max-width: 568px){
        .inputSearch{
            display: none;
        }
        .searchIcon{
            display: block;
        }
    }
`