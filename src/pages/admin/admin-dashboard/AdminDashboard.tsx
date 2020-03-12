import React from 'react';

import './AdminDashboard.scss';

import SideBar from '../../../shared/components/sidebar/SideBar';
import '../../../shared/components/sidebar/SideBar.scss';

import PlaceholderGraph from '../../../shared/components/faux-graphics/PlaceholderGraph';
import Hero from '../../../shared/components/faux-graphics/Hero';
import Logo from '../../../shared/components/logo/Logo';
import Background from '../../../shared/components/standard-background/Background';
import LatestNews from '../../../shared/components/faux-graphics/LatestNews';

export default function AdminDashboard() {

    return (

        <div className="dashboard-page">
            <div className="page-wrapper">

                <Background />
                <SideBar />

                <div className="main-section">

                    <section className="card placeholder">
                        <LatestNews />
                        <div className="placeholder-summary">
                        Latest News
                        </div>
                    </section>

                    <section className="card placeholder">
                        <PlaceholderGraph />
                        <div className="placeholder-summary">
                            Current Campaign
                        </div>
                    </section>

                    <section className="card placeholder-2">
                        <Hero />
                        <div className="placeholder-summary">
                            Latest Submissions                        
                        </div>
                    </section>

                    <section className="card placeholder-2">
                        <Logo />
                        <div className="placeholder-summary">
                            New Candidates
                        </div>
                    </section>      

                    <section className="card placeholder">
                        <PlaceholderGraph />
                        <div className="placeholder-summary">
                            Example
                        </div>
                    </section>              

                </div>

            </div>

        </div>
    )
}