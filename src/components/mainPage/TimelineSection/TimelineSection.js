import React from 'react';
import Timeline from "../Timeline/Timeline";
import s from './TimelineSection.module.css'

const TimelineSection = () => {
    return (
        <div>
            <h2 className={'text_center'}>Этапы кейс-чемпионата</h2>
            <div className={s.timeline_cont}>
                <Timeline/>
            </div>
        </div>
    );
};

export default TimelineSection;