import React from 'react';
import { StyledCard } from '../shared/styling/SharedStyles';
import LatestNews from '../shared/components/SVG/LatestNews';
import Hero from '../shared/components/SVG/Hero';
import Logo from '../shared/components/SVG/Logo';
import PlaceholderGraph from '../shared/components/SVG/PlaceholderGraph';

import Headline from '../shared/components/Misc/Headline';

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
    border: 0;    

    &:hover {

        background-color: ${props => props.theme.colors.white};

        .card-label {
            filter: hue-rotate(45deg);
        }
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

interface isSelected {
    isSelected?: boolean;
}

export default function AdminHome(props: isSelected) {

    return (     
        <StyledContainer>
            <Headline headline={"Dashboard"}/>     
            <DashboardBody/> 
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