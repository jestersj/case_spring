import React from 'react';
import FirstSection from "../components/mainPage/FirstSection/FirstSection";
import s from './MainPage.module.css'
import PartnersSection from "../components/mainPage/PartnersSection/PartnersSection";
import CardsSection from "../components/mainPage/CardsSection/CardsSection";
import TimelineSection from "../components/mainPage/TimelineSection/TimelineSection";
import TextsSection from "../components/mainPage/TextsSection/TextsSection";
import SignUpSection from "../components/mainPage/SignUpSection/SignUpSection";

const MainPage = () => {
    return (
        <main className={s.content}>
            <FirstSection/>
            <PartnersSection/>
            <CardsSection/>
            <TextsSection/>
            <TimelineSection/>
            <SignUpSection/>
        </main>
    );
};

export default MainPage;