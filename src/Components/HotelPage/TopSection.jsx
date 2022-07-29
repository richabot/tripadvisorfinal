import React from 'react'
import styled from "styled-components"
import styles from './TopSection.module.css'
import InputDate from './InputDate'
import Background from '../../utils/pexels-photo-531035.jpeg'

const Wrapper = styled.div`
  height: 251px;
  background: #ffffff;
`;

const Heading = styled.h1`
   font-size: 32px;
   font-weight: bold
`

const Subheading = styled.h6`
   font-size: 16px;   
   font-weight: bold
`

const TopSection = () => {
    return (
      <Wrapper style={{ backgroundImage: `url(${Background})`,backgroundRepeat:'no-repeat',maxWidth: "100%",maxHeight: "100%",backgroundSize: "cover", strech:'no-strech', shadow:'10%'}}>
        <div className= {styles.centerBox}>
          <Heading style={{ textAlign: "center" ,color: '#ffffff'}}>
            Goa Hotels and Places to Stay
          </Heading>
          <Subheading style={{ textAlign: "center" , color: '#ffffff'}}>
            Enter dates to find the best prices
          </Subheading>
          <InputDate/>
        </div>
      </Wrapper>
    );
}

export default TopSection;
