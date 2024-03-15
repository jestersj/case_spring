import React from 'react';
import s from './PartnersSection.module.css'
import sber from '../../../assets/sber.png'
import ivi from '../../../assets/ivi.png'

const PartnersSection = () => {
    return (
        <div className={'custom_container'}>
            <div className={s.cont}>
                <div className={s.partner_block}>
                    <img src={sber} alt={'sber'} height={150}/>
                    <p>
                        <strong>
                            Секция Strategy
                        </strong>
                        <br/>
                        Сбер
                    </p>
                    <p>
                        Решите кейс на тему ESG-развития компании и получите фаст-трек на стажировку!
                    </p>
                </div>

                <div className={s.partner_block}>
                    <img src={ivi} alt={'ivi'} height={150}/>
                    <p>
                        <strong>
                            Секция Marketing
                        </strong>
                        <br/>
                        Иви
                    </p>
                    <p>
                        Решите кейс и выиграйте приглашение на бизнес-завтрак с топ-менеджером департамента маркетинга!
                    </p>
                </div>
        </div>

</div>
)
    ;
};

export default PartnersSection;