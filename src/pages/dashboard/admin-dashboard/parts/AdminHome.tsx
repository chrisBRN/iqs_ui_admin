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

    width: 100%;

    .spacer {
        height: 1em;
        
        margin-top: 1em;
        
    }
`;

const StyledDashboardBody = styled.div`    
    
    background-color:  ${props => props.theme.colors.green};
            
    width: auto;  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    ${props => props.theme.mixins.scrollBar};    
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
        top: 1em;
        left: 1em;
        background-color: ${props => props.theme.colors.blue};
        padding: 0.5em;  
        color: ${props => props.theme.colors.white}
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