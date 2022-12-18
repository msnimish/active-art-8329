import React from 'react'
import styled from "styled-components"
import ProductCard from "./ProductCard"

const SimilarProduct = ({arr}) => { 
  return (
    <>
    <SimilarSlider>
      {
        arr.map((el,i)=> <div key={i}><ProductCard  {...el}/></div> )
      }
    </SimilarSlider>
    </>
  )
}


const SimilarSlider = styled.div`
display: flex;
overflow: auto;
gap: 15px;
::-webkit-scrollbar {
    width: 0;
}
`


export default SimilarProduct
