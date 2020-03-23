import React from 'react';
import { StyledCard } from '../shared/styling/SharedStyles';
import LatestNews from '../shared/components/SVG/LatestNews';
import Hero from '../shared/components/SVG/Hero';
import Logo from '../shared/components/SVG/Logo';
import PlaceholderGraph from '../shared/components/SVG/PlaceholderGraph';

import Headline, { Footer } from '../shared/components/Misc/Headline';

import styled from 'styled-components';

const StyledContainer = styled.div`   
    
    display: flex;
    justify-content: center;   
    overflow: hidden;  

    position: relative;

    height: calc(100vh - 11rem)
`;

const StyledDashboardBody = styled.div`    
    
    background-color:  ${props => props.theme.colors.boxFill};   
    width: 60%;  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 1em 0em;

    ${props => props.theme.mixins.scrollBar};    
`;

const DashboardCard = styled(StyledCard)`    
    
    margin-top: 1em;
    margin-left: 1em;   
    border: 0;        

    .card-label {
        position: absolute;
        font-weight: bold;
        top: 1em;
        left: 1em;
        background-color: ${props => props.theme.colors.boxFill};
        padding: 0.5em;  
        color: ${props => props.theme.colors.blue}
    }
`

export default function AdminHome() {

    return (     

        <div>
            <Headline headline={"Dashboard"}/> 
                <StyledContainer>
                    <DashboardBody/>
                </StyledContainer>             
            <Footer/> 
             
        </div>
    )
}

function DashboardBody(){
        return (
            <StyledDashboardBody>     

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <div className="card-label">Latest News</div>
                    <Hero/>
                </DashboardCard>                

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <div className="card-label">Latest Users</div>
                    <PlaceholderGraph/>
                </DashboardCard>

                <DashboardCard bounce width={"36em"} height={"20em"}>
                    <div className="card-label">Latest Candidates</div>
                    <Logo/>
                </DashboardCard>

                <DashboardCard bounce width={"30em"} height={"20em"}>
                    <div className="card-label">Latest Submissions</div>
                    <LatestNews/>
                </DashboardCard>

                <DashboardCard bounce width={"20em"} height={"20em"}>
                    <div className="card-label">Latest Users</div>
                    <PlaceholderGraph/>
                </DashboardCard>

                <DashboardCard bounce width={"36em"} height={"20em"}>
                    <div className="card-label">Latest Candidates</div>
                    <Logo/>
                </DashboardCard>                

                <DashboardCard bounce width={"30em"} height={"20em"}>
                    <div className="card-label">Latest Submissions</div>
                    <LatestNews/>
                </DashboardCard>                

            </StyledDashboardBody>
    )
}