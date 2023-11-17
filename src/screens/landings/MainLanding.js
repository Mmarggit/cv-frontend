import { Button } from "react-bootstrap"
import { COLORS } from "../../constants"
import { useNavigate } from "react-router-dom"
import { ReactComponent as PersonSvg} from '../../icons/person.svg'
import { ReactComponent as FileSvg } from '../../icons/file.svg'
import { ReactComponent as DownloadSvg } from '../../icons/download.svg'

export const MainLanding = () => {
    return   <div style={{maxWidth:'1500px'}} className="mx-auto pb-5">
        <Resume />
        <Path />
        <Tips />
        <Samples/>
        <Stuff />
    </div>
}


const Resume = () => {
    return <div className="container-fluid d-flex flex-row justify-content-center">
        <div className="d-flex flex-column flex-wrap justify-content-center">
            <p className="fs-1 text-center mt-5" style={{color: COLORS.primary, fontWeight: '900'}}>Впечатляющее <span style={{color: COLORS.text_primary}}>резюме</span> за 5 минут. <span style={{color: COLORS.text_primary}}>Бесплатно</span></p>
            <img src="https://resource.hurtle.ru/resume_mockup.png" className="m-auto" style={{height: 'auto', width: '100%', maxWidth: '800px'}}></img>
            <Button onClick={() => auth_in_hh()} style={{color:'white', backgroundColor: '#F8485D', border:'0px', width: 'fit-content'}} className="btn rounded-2 mx-auto px-5 py-2">Войти через hh.ru</Button>
        </div>
    </div>
}


export const Path = () => {
    return <div>
        <p className="fs-1 text-center mt-5" style={{color: '#6757F1', fontWeight: '900'}}>Это сложно?</p>
        <div className="row gap-5 mt-5 mb-4">
            <IconItem topic='1.Регистрация' description='Просто войди через свой аккаунт' span=' hh.ru'><PersonSvg/></IconItem>
            <IconItem topic='2.Выбери шаблон' description='Выбери любой из трех шаблонов и настрой его'><FileSvg/></IconItem>
            <IconItem topic='3.Скачай PDF' description='Готово! Остается просто скачать готовый файл'><DownloadSvg /></IconItem>
        </div>



    </div>
}


const IconItem = ({children, topic, description, span=''}) => {
    return <div className="col">
            {children}
            <p className="fs-4 mt-4 mb-3 text-sm-start text-center text-nowrap" style={{color: COLORS.primary, fontWeight:'600'}}>{topic}</p>
            <p className="fs-4 text-sm-start text-center" style={{color: COLORS.text, fontWeight:'600'}}>{description}<span style={{color:'red'}}>{span}</span></p>


    </div>
}


export const Tips = () => {
    return <div>
        <p className="fs-1 text-center mt-5" style={{color: '#6757F1', fontWeight: '900'}}>Сделано профессионалами</p>
        <div className="row gap-5 mb-5">
            <div className="col">
                <p className="fs-4" style={{color:'#23329B'}}>Этот сервис создан совместно с опытными HR-специалистами и одобрен рекрутерами крупнейших российских компаний.
                 Каждый шаблон прошел не один десяток проверок, так что ты можешь быть уверен в надежности</p>
            </div>
            <div className="col offset-xl-1">
                <Box description='Без водяных знаков'></Box>
                <Box description='Полностью кастумизируемый'></Box>
                <Box description='Абсолютно бесплатный'></Box>
            </div>

        </div>
    </div>
}

const Box = ({description}) => {
    return <div>
        <p className="rounded-3 px-4 py-3 fs-5 mb-3" style={{color: '#6757F1', border: '1px solid #6757F1', fontWeight: '600', width: 'fit-content'}}>{description}</p>
    </div>

}

export const Stuff = () => {
    return <div className="d-flex flex-column mt-5">
        <p className="fs-1 text-center mb-3" style={{color: '#6757F1', fontWeight: '900'}}>Бесплатно. Точно бесплатно</p>
        <p className="fs-4 text-center mb-5" style={{color: '#23329B', fontWeight: '600'}}>Резюме обязано быть качественным и это не должно стоить денег</p>
        <div className="rounded-4 mx-auto px-5 py-4 w-100 mb-5" style={{border: '1px solid #6757F1', maxWidth: '500px'}}>
            <p className="fs-4" style={{fontWeight: '600'}}>Полный доступ</p>
            <p className="fs-3" style={{fontWeight: '600'}}><span style={{fontWeight: '900'}}>0 руб.</span> навсегда</p>
            <p className="fs-5 mt-2">- импорт из hh.ru</p>
            <p className="fs-5">- настройка шаблона</p>
            <p className="fs-5">- скачивание PDF файла</p>
            <p className="fs-5">- без водяных знаков</p>
        </div>
        <Button onClick={() => auth_in_hh()} style={{color:'white', backgroundColor: '#F8485D', border:'0px'}} className="btn mx-auto rounded-2 px-5 py-2 mb-">Войти через hh.ru</Button>
    </div>
}

function auth_in_hh() {
    
}

export const Samples = () => {
    const navigate = useNavigate()

    return <div>
        <p className="fs-1 text-center mt-5 mb-2" style={{color: '#6757F1', fontWeight: '900'}}>Шаблоны для успеха</p>
        <p className="fs-4 text-center" style={{color: '#23329B'}}>Выбирай один из трех шаблонов резюме, созданных
                специально для хартл</p>
        <div className="row mt-5">
            <div className="col nav flex-column nav-pills order-lg-first order-last align-items-center align-items-md-start" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active btn fs-1 p-0 mb-2 mt-4"
                            style={{background: 'none', color: '#FFBCC4', width: 'fit-content', fontWeight: 'bold'}}
                            id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button"
                            role="tab" aria-controls="v-pills-home" aria-selected="true">Простой</button>
                <button className="nav-link btn fs-1 p-0 mb-2"
                            style={{background: 'none', color: '#FFBCC4', width: 'fit-content', fontWeight: 'bold'}}
                            id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                            type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Современный</button>
                <button className="nav-link btn fs-1 p-0 mb-2"
                            style={{background: 'none', color: '#FFBCC4', width: 'fit-content', fontWeight: 'bold'}}
                            id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                            type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Профессиональный</button>
                <Button onClick={() => navigate('/resumes')} onMouseEnter={(p) => p.target.style='background-color: #ccc'} onMouseLeave={(p) => p.target.style='background-color: #F8485D'} style={{color:'white', backgroundColor: '#F8485D', border:'0px'}} className="btn rounded-2 px-5 py-2">Войти через hh.ru</Button>
            </div>
            <div className="col-lg tab-content order-lg-last mb-4" id="v-pills-tabContent">
                    <div className="tab-pane fade show active bg-info" id="v-pills-home" role="tabpanel"
                         aria-labelledby="v-pills-home-tab"> <img src="https://resource.hurtle.ru/r_tmp_full.jpg"
                                                                 style={{filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.03))'}}
                                                                 className="img-fluid d-none d-md-block"/><img
                            src="https://resource.hurtle.ru/r_tmp_small.jpg"
                            style={{filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.03))'}}
                            className="d-block d-md-none img-fluid"/></div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                         aria-labelledby="v-pills-profile-tab"><img src="https://resource.hurtle.ru/r_tmp_full-1.jpg"
                         style={{filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.03))'}}
                                                                    className="img-fluid d-none d-md-block"/><img
                            src="https://resource.hurtle.ru/r_tmp_small-1.jpg"
                            style={{filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.03))'}}
                            className="d-block d-md-none img-fluid"/></div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                         aria-labelledby="v-pills-messages-tab"><img src="https://resource.hurtle.ru/r_tmp_full-2.jpg"
                         style={{filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.03))'}}
                                                                     className="img-fluid d-none d-md-block"/><img
                            src="https://resource.hurtle.ru/r_tmp_small-2.jpg"
                            style={{filter: 'drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.03))'}}
                            className="d-block d-md-none img-fluid"/></div>
                </div>
        </div>
        </div>
        }