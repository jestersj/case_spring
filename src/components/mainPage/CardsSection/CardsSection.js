import React from 'react';
import s from './CardsSection.module.css'
import bg from '../../../assets/bg_rectangle.jpg'

const CardsSection = () => {
    return (
        <div className={s.relative}>
            <div className={'custom_container'}>
                <div className={s.cont}>
                    <div className={s.card}>
                        <h5>Регистрация</h5>
                        <p>Прием заявок на участие будет осуществляться <b>с 26 марта по 6 апреля</b> включительно</p>
                    </div>
                    <div className={s.card}>
                        <h5>Участие</h5>
                        <p>Участвовать могут все студенты бакалавриата, специалитета
                            и магистратуры. Участие <b>абсолютно бесплатно</b></p>
                    </div>
                    <div className={s.card}>
                        <h5>Команды</h5>
                        <p>В чемпионате участвуют команды из <b>3-5 человек</b>.
                            Отсутствие команды – это не проблема. В таком случае мы подберем ее вам!</p>
                    </div>
                    <div className={[s.card, s.last_card].join(' ')}>
                        <h5>Что такое кейс-чемпионат?</h5>
                        <p>Кейс-чемпионат – это соревнование по решению бизнес-задач от реальных компаний. Он позволяет
                            развить аналитические и лидерские навыки, а также погрузиться в бизнес-среду. Участие и
                            победа
                            в кейс-чемпионатах дает существенные карьерные преимущества и является отличным стартом для
                            развития в сфере
                        </p>
                    </div>
                </div>
            </div>
            <img src={bg} className={s.bg}/>
        </div>
    );
};

export default CardsSection;