import React from 'react';
import '../../shared/styling/global-styling.scss';

import './Dashboard.scss';

import SideBar from '../../shared/components/sidebar/SideBar';
import '../../shared/components/sidebar/SideBar.scss';

import CopyrightNotice from '../login/CopyrightNotice';
import PlaceholderGraph from '../../shared/components/faux-graphics/PlaceholderGraph';
import Hero from '../../shared/components/faux-graphics/Hero';
import Logo from '../../shared/components/logo/Logo';

export default function Dashboard() {

    return (
        <div className="dashboard-page-wrapper">

            <div className="dashboard-background"></div>

            <SideBar/>           

            <div className="main-section">

                
               
                {/* <section className="card placeholder-graph"><PlaceholderGraph/></section> 
                <section className="card placeholder-graph"><Hero/></section> 
                <section className="card placeholder-graph"><Logo/></section> 
                <section className="card placeholder-graph"><PlaceholderGraph/></section> 
                <section className="card placeholder-graph"><PlaceholderGraph/></section>  */}
                
            </div>
           
        </div>
    )
}