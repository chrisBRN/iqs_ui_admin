import React from 'react';
import { StyledCard, StyledFullPageContentWrapper } from '../../../../shared/styling/SharedStyles';
import LatestNews from '../../../../shared/components/faux-graphics/LatestNews';
import Hero from '../../../../shared/components/faux-graphics/Hero';
import Logo from '../../../../shared/components/faux-graphics/Logo';
import PlaceholderGraph from '../../../../shared/components/faux-graphics/PlaceholderGraph';
import styled from 'styled-components';


const StyledContainer = styled.div`         
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: center;  
    position: relative;
`;

export default function AdminDashboardHome() {
   
    return (

        <StyledContainer>
     
            <StyledCard width={"auto"} height={"auto"}>
                <LatestNews/>
            </StyledCard>
          
            <StyledCard width={"auto"} height={"auto"}>
                <Hero/>
            </StyledCard>
          
            <StyledCard width={"auto"} height={"auto"}>
                <Logo/>
            </StyledCard>
          
            <StyledCard width={"auto"} height={"auto"}>
                <PlaceholderGraph/>
            </StyledCard>
          

        </StyledContainer>
    )
}