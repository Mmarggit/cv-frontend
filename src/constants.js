import { Alert } from 'react-bootstrap';
export const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
export const FULL_MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
export const SHORT_MONTHS = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'ноя.', 'дек.']
export const PASTEL_COLORS = ['#FFFCB0', '#D4FFC0', '#D1F4FF', '#FDD0B7']

export const COLORS = {
    primary: '#6757F1', //'#7268CB',
    light_primary: '#F1F0FA',
    red_primary: '#F8485D',
    red_light_primary: '#FFF9FA',
    text_primary: '#5246B8',
    hover_primary: '#4C3EC9',
    danger: '#F8485D',
    footer: '#272727', // '#F8F8FD'
    secondary: '#FAFAFD',
    text: '#272727',
    second_text: '#6E6D75',
    header_text: '#849095',
    pastel_secondary: '#FFF9F9',
    pastel: '#FBFBFF',
    warning: '#B8B0FF',
    success: '#038900',
    hr: '#C7C8C9'
}

export const SOURCE = {
    url: 'https://api.hurtle.ru',
    source_url: 'https://resource.hurtle.ru/'
}

export const datePlusTime = (datetime) => {
    let [date, time] = datetime.split('T')
    date = date.split('-').reverse()
    date[1] = MONTHS[parseInt(date[1])-1]
    return date.join(' ') + ', ' + time.substring(0,5)
}

export const calendarDateToDateTime = (calendarDate) => {
    return [ calendarDate.getMonth()+1,calendarDate.getDate(),calendarDate.getFullYear()].join('-')
}

export const ErrorMsg = ({ setState, state }) => {
    setTimeout(() => setState(p => ({ ...p, errorMsg: '' })), 3000)
    return (
        <div className='position-fixed' style={{ top: '10px', right: '10px', zIndex: '999999' }}>
            <Alert show={state.errorMsg !== ''} variant="danger" onClose={() => setState(p => ({ ...p, errorMsg: '' }))} dismissible>
                <Alert.Heading>Ошибка</Alert.Heading>
                <p className='text-wrap'>
                    {state.errorMsg}
                </p>
            </Alert>
        </div>
    )
} 

export const SuccessMsg = ({ setState, state }) => {
    setTimeout(() => setState(p => ({ ...p, successMsg: '' })), 3000)
    return (
        <div className='position-fixed' style={{ top: '10px', right: '10px', zIndex: '999999' }}>
            <Alert show={state.successMsg !== ''} variant="success" onClose={() => setState(p => ({ ...p, successMsg: '' }))} dismissible>
                <Alert.Heading>Success!</Alert.Heading>
                <p className='text-wrap'>
                    {state.successMsg}
                </p>
            </Alert>
        </div>
    )
}

export const switchTitle = (path) => {document.title = path.includes('mgimo') ? 'Хартл | Цифровая кафедра МГИМО' : 
(path.includes('contacts') ? 'Хартл | Контакты' : (path.includes('policy') ? 'Хартл | Документы' : (path.includes('python') ? 'Работа Python-разработчиком': 'Сервис поиска работы Хартл')))}

export const Validation = {
    validName: name => /^[A-zА-яЁё]+$/i.test(name),
    validFio: fio => fio.trim().split(' ').length >= 2 && fio.trim().split(' ').length < 4 && fio.trim().split(' ').filter(el => !Validation.validName(el)).length === 0,
    validMail: mail => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail), // /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    validPhone: phone => phone !== '' && !phone.includes('_') ,
    validPassword: pswd => pswd.length >= 6, // /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$/.test(pswd)
    validDate: date => date.length === 10,
    validTelegram: tg => tg !== '',
    validMask: mask => !mask.includes('_') && mask !== ''
}

export function getAuthRoute(state, is_mgimo = false ) {
    let result = is_mgimo ? '/mgimo/auth' : '/auth'
    console.log(state)
    if (state.is_active) {
        if (state.is_interview){
            if (state.is_portfolio) {
                result = '/account'
            } else result += '/complete_portfolio'
        } else result += '/set_interview'
    } else result += '/confirm_mail'
    return result
}

export const getMonthPeriod = (st_m, st_y, end_m, end_y, till_now) => {
    if (till_now) {
        return st_m + ' ' + st_y + ' - по н.в.'
    }
    if (st_y === end_y) {
        if (st_m === end_m) {
            return st_m + ' ' + st_y
        }
        return st_m + ' - ' + end_m + ' ' + end_y
    }
    return st_m + ' ' + st_y + ' - ' + end_m + ' ' + end_y
}

export const MEETING_TYPES = {
    consultation_b2b: 'consultation_b2b',
    consultation_b2c: 'consultation_b2c',
    interview: 'interview'
}

export const DEMO_CANDIDATE_ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW4iOiJleGFtcGxlQG1haWwucnUiLCJ0eXBlIjoiY2FuZGlkYXRlIn0.EcGWWIb-g4QT7EJlftS5JOIc826LmCDDPyEISvHtX74'