import React from 'react'
import styled from 'styled-components'

const MenuMore = styled.div`
  
  p{
    font-weight: 700;
  }
  @media all and (max-width:992px){
    p{
      display:none;
    }
  }
`

const MoreMenu = () => {
  return (
    <MenuMore><p>More</p></MenuMore>
  )
}

export default MoreMenu