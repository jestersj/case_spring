import React, {useEffect, useState} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import s from './Timeline.module.css'

const dates = [
    {
        date: '23 марта - 3 апреля',
        event: 'Регистрация участников'
    },
    {
        date: '4 - 10 апреля',
        event: 'Отборочный тур'
    },
    {
        date: '11 - 15 апреля',
        event: 'Проверка решений участников'
    },
    {
        date: '15 - 21 апреля',
        event: 'Доработка решений'
    },
    {
        date: '22 и 24 апреля',
        event: 'Финальная защита решений'
    },
]
const Timeline = () => {
    const [isDesktop, setIsDesktop] = useState(true)
    const checkIsDesktop = () => {
        const width = window.innerWidth
        if (width <= 1200) {
            setIsDesktop(false)
        } else {
            setIsDesktop(true)
        }

    }
    useEffect(() => {
        window.addEventListener('resize', checkIsDesktop);
        checkIsDesktop();


        // // Убираем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', checkIsDesktop);
        };
    }, [])
    return (
        <VerticalTimeline
            lineColor={'#7435f3'}
        >
            {
                dates.map(el =>
                    <VerticalTimelineElement
                        date={isDesktop ? el.date : ''}
                        position={'right'}
                        iconClassName={s.icon}
                        dateClassName={s.date}
                        contentStyle={{
                            background: 'none',
                            boxShadow: 'none',
                            paddingTop: 17
                        }}
                        contentArrowStyle={{
                            display: 'none'
                        }}
                    >
                        <b>{el.event}</b>
                        {
                            !isDesktop && <p>{el.date}</p>
                        }
                    </VerticalTimelineElement>
                )
            }
        </VerticalTimeline>
    );
};

export default Timeline;