import React from 'react';
import { StyledCard } from '../../../../shared/styling/SharedStyles';
import LatestNews from '../../../../shared/components/faux-graphics/LatestNews';
import Hero from '../../../../shared/components/faux-graphics/Hero';
import Logo from '../../../../shared/components/faux-graphics/Logo';
import PlaceholderGraph from '../../../../shared/components/faux-graphics/PlaceholderGraph';

import Headline from './Headline'

import styled from 'styled-components';


const StyledContainer = styled.div`   

    display: flex;
    flex-direction: column;
    justify-content: space-between;         
    overflow-x: hidden;  
    padding-bottom: 1rem;
    

    .main-body {      

        background-color:  ${props => props.theme.colors.green};
           
        width: auto;  
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;     
        // align-items: baseline;     

        ${props => props.theme.mixins.scrollBar};           
    }

    .spacer {
        height: 1em;
        margin-top: 1em;
    }
`;

const DashboardCard = styled(StyledCard)`    
    
    margin-top: 1em;
    margin-left: 1em;    
    filter: contrast(96%);
    border: 0;

    &:hover {
        filter: contrast(92%);
    }

    .card-label {
        position: absolute;
        top: 2em;
        left: 2em;
    }
`



export default function AdminHome() {
   
    return (     
        <StyledContainer>
            <Headline headline={"dashboard"}/>     
            <DashboardBody/>  
            <div className="spacer"></div>
        </StyledContainer>
    )
}

function DashboardBody(){
        return (
            <div className="main-body">

                <div className="spacer"></div>     

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <div className="card-label">Latest News</div>
                    <Hero/>
                </DashboardCard>                

                <DashboardCard bounce width={"36em"} height={"20em"}>
                    <PlaceholderGraph/>
                </DashboardCard>

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <Logo/>
                </DashboardCard>

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <LatestNews/>
                </DashboardCard>

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <Logo/>
                </DashboardCard>

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <Hero/>
                </DashboardCard>

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <PlaceholderGraph/>
                </DashboardCard>        

                <DashboardCard bounce width={"36em"} height={"20em"}>
                    <PlaceholderGraph/>
                </DashboardCard>    

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <PlaceholderGraph/>
                </DashboardCard>             

            </div>
    )
}