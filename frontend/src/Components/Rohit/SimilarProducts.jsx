import React, {useEffect} from 'react'
import styled from "styled-components"
import ProductCard from "./ProductCard"
import { getProducts } from '../../Redux/ProductsReducer/action'
import { useDispatch, useSelector } from 'react-redux'



const SimilarProducts = ({prod}) => { 
  const dispatch = useDispatch()
  const arr = useSelector((reduxStore) => reduxStore.ProductsReducer.products);
  const sameCat = arr && arr
  .filter((el)=> el._id !== prod._id && el.category === prod.category )
  .filter((el, i)=> i<4)

  const sameSubCat = arr && arr
  .filter((el) => el._id !== prod._id && el.subCategory === prod.subCategory && sameCat.includes(el) === false)
  .filter((i)=> i<4)



  useEffect(()=>{
dispatch(getProducts({params:{category: prod.category}}))
  },[prod])

  return (
    <Container>
    {
      sameCat.length>0 && 
      <SubContainer>
    <h3>People also likes</h3>
    <SimilarSlider>
      {
        sameCat.map((el,i)=> <div key={i}><ProductCard  {...el}/></div> )
      }
    </SimilarSlider>
    </SubContainer>
    }


   {
sameSubCat.length>0 && 
<SubContainer>
      <h3>People also Visits</h3>
      <SimilarSlider>
      {
        sameSubCat.map((el,i)=> <div key={i}><ProductCard  {...el}/></div> )
      }
    </SimilarSlider>
    </SubContainer>
   }
    </Container>
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

const SubContainer = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
h3{
  font-size: 30px;
  font-weight: 500;
}
`
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`

export default SimilarProducts
