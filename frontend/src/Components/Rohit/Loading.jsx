import React from 'react'
import { TbChevronsDownLeft } from 'react-icons/tb'
import styled from "styled-components"


const Loading = () => {
    
  return (
    <LoadingWrapper>
    <div className="container">
    <div className="ring"></div>
    <div className="ring"></div>
    <div className="ring"></div>
    <span className="loading">Loading...</span>
  </div>
  </LoadingWrapper>
  )
}

export default Loading


const LoadingWrapper = styled.div`
 margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: gray;
       

        .container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      
      .ring{
        width: 150px;
        height: 150px;
        border: 0px solid white;
        border-radius: 50%;
        position: absolute;
      }

      .ring:nth-child(1){
        border-bottom-width: 8px;
        border-color: rgb(255,0,255) ;
        animation: rotate1 2s linear infinite;
      }

      .ring:nth-child(2){
        border-right-width: 8px;
        border-color: rgb(0,247,255);
        animation: rotate2 2s linear infinite;
      }

      .ring:nth-child(3){
        border-top-width: 8px;
        border-color: rgb(0,255,13);
        animation: rotate3 2s linear infinite;
      }

      .loading{
        color: white;
      }

      @keyframes rotate1{
        0%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
      }

      @keyframes rotate2{
        0%{
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(50deg) rotateY(-10deg) rotateZ(360deg);
        }
      }

      @keyframes rotate3{
        0%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
      }

`


/*
<style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #011015;
      }

      .container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ring{
        width: 150px;
        height: 150px;
        border: 0px solid white;
        border-radius: 50%;
        position: absolute;
      }

      .ring:nth-child(1){
        border-bottom-width: 8px;
        border-color: rgb(255,0,255);
        animation: rotate1 2s linear infinite;
      }

      .ring:nth-child(2){
        border-right-width: 8px;
        border-color: rgb(0,247,255);
        animation: rotate2 2s linear infinite;
      }

      .ring:nth-child(3){
        border-top-width: 8px;
        border-color: rgb(0,255,13);
        animation: rotate3 2s linear infinite;
      }

      .loading{
        color: white;
      }

      @keyframes rotate1{
        0%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
      }

      @keyframes rotate2{
        0%{
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(50deg) rotateY(-10deg) rotateZ(360deg);
        }
      }

      @keyframes rotate3{
        0%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100%{
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <span class="loading">Loading...</span>
    </div>
  </body>
*/