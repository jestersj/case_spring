import React, {useState} from 'react';
import LogoBlock from "../components/mainPage/LogoBlock/LogoBlock";
import s from './SignInPage.module.css'
import CustomInput from "../components/signInPage/CustomInput/CustomInput";
import CustomRadio from "../components/signInPage/CustomRadio/CustomRadio";

const facultiesArr = [
    'Высшая инженерная школа “Новые материалы и технологии”',
    'Высшая школа кибертехнологий, математики и статистики',
    'Высшая школа менеджмента',
    'Высшая школа права',
    'Высшая школа социально-гуманитарных наук',
    'Высшая школа финансов',
    'Высшая школа экономики и бизнеса',
    'Институт “Первая Академия медиа”',
    'Факультет бизнеса “Капитаны”',
    'Высшая школа “Форсайт”',
    'Высшая школа креативных индустрий',
    'Факультет “Плехановская школа бизнеса “Интеграл”'
]
const SignInPage = ({isRea}) => {
    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [faculty, setFaculty] = useState('')
    const [tg, setTg] = useState('')
    const [vk, setVk] = useState('')
    const [teamName, setTeamName] = useState('')
    const [captain, setCaptain] = useState('')

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const obj = {
            name,
            course,
            faculty,
            tg,
            vk,
            teamName,
            captain,
        }
        console.log(obj)
    }
    return (
        <div className={'custom_container'}>
            <div className={s.content_center}>
                <LogoBlock/>
            </div>
            <h1 className={s.large_text}>Plekhanov Case spring 2024</h1>
            <form className={s.input_cont}
                  onSubmit={handleSubmit}
            >
                <CustomInput label={'ФИО'} value={name} onChange={setName}/>
                <CustomInput label={'Курс'} value={course} onChange={setCourse}/>
                {
                    isRea ?
                        <div className={s.radio_group}>
                            {
                                facultiesArr.map(el =>
                                    <CustomRadio
                                        value={el}
                                        checked={el === faculty}
                                        onClick={setFaculty}
                                        key={el}
                                    />
                                )
                            }
                        </div>
                        :
                        <CustomInput label={'Факультет'} value={faculty} onChange={setFaculty}/>
                }
                <CustomInput label={'Ваш ник в TG'} value={tg} onChange={setTg}/>
                <CustomInput label={'Ссылка на Ваш VK'} value={vk} onChange={setVk}/>
                <CustomInput label={'Название команды'}
                             value={teamName}
                             onChange={setTeamName} description={'Если у Вас нет команды, поставьте “-”, и мы Вас распределим'}
                />
                <CustomInput label={'ФИО капитана (при наличии команды)'} value={captain} onChange={setCaptain}/>
                <p>
                    Вся актуальная информация по чемпионату будет
                    опубликована <br/>
                    <b>в тг-канале: <a href="https://t.me/+kGrx30ZscQQ1MGJi" target={'_blank'}
                                       className={'text-black'}>https://t.me/+kGrx30ZscQQ1MGJi</a></b>
                </p>
                <p>
                    <b>Ссылка на чат: <a href="https://t.me/+ZFoBUq4HOpM4YWQy" target={'_blank'}
                                         className={'text-black'}>https://t.me/+ZFoBUq4HOpM4YWQy</a></b>
                </p>
                <button type={'submit'} className={s.grad_button}>
                    Отправить
                </button>
                {success && <h3 className={'text_center'} style={{color: 'green'}}>Заявка успешно отправлена</h3>}
                {error && <h3 className={'text_center'} style={{color: 'red'}}>Произошла ошибка, попробуйте позже</h3>}
            </form>
        </div>
    );
};

export default SignInPage;