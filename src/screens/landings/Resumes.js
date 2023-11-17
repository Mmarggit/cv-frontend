import { useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Resumes = () => {
    return <User_Stuff/>
}


export default Resumes




export const User_Stuff = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return <div className="container">
    <div className='bloc-tabs space-x-4'> 
            <button className={toggleState === 1 ? "btn tabs active items-center space-x-2 font-display text-24 rounded-lg p-3" : 
            "tabs items-center space-x-2 font-display text-24 rounded-lg p-3"} onClick={() => toggleTab(1)}>Мои резюме</button>
            <button className={toggleState === 2 ? "btn tabs active items-center space-x-2 font-display text-24 rounded-lg p-3" : 
            "tabs items-center space-x-2 font-display text-24 rounded-lg p-3"} onClick={() => toggleTab(2)}>Мои отклики</button>
            <button className={toggleState === 3 ? "btn tabs active items-center space-x-2 font-display text-24 rounded-lg p-3" : 
            "tabs items-center space-x-2 font-display text-24 rounded-lg p-3"} onClick={() => toggleTab(3)}>Сохраненные вакансии</button>
    <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : 
            "content"}><My_Resume/></div>
        <div className={toggleState === 2 ? "content active-content" : 
            "content"}>У вас пока нет откликов. Откликаться вы можете на страницах вакансий.</div>
        <div className={toggleState === 3 ? "content active-content" : 
            "content"}>У вас пока нет сохраненных вакансий. Добавить вакансию в сохраненные вы можете на ее странцице.</div>
    </div>
    </div>
    </div>
}




const My_Resume = () => {
    const navigate = useNavigate()
    return <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 -mt-8 lg:mt-0" style={{gridAutoRows:'322px'}}>
                <div className="d-flex flex-column mt-5">
                    <div className="rounded-4 mx-auto px-5 py-4 w-100 mb-5" style={{border: '1px solid #6757F1', maxWidth: '500px'}}>
                    <p className="fs-5" style={{fontWeight: '600'}}>Мое резюме</p>
                    <div className="d-flex flex-col gap-4">
                        <div className="space-y-4">
                            <p>Просмотров</p>
                            <p style={{fontWeight:'600'}}>0</p>
                        </div>
                    <div className="d-flex flex-col gap-4">
                        <div className="space-y-4">
                            <p>Скачиваний</p>
                            <p style={{fontWeight:'600'}}>0</p>
                        </div>
                    </div>
                    </div>
                    <div className="flex border-t divide-x h-12">
                        <Button className="flex-1 w-full flex justify-center items-center font-display" onClick={() => navigate('/edit_resume')}>Редактировать</Button>
                        </div>    
                    </div>
                </div>
                <div className="d-flex flex-column mt-5">
                    <div className="rounded-4 mx-auto px-5 py-4 w-100 mb-5 items-center justify-center" style={{border: '1px dashed #6757F1', maxWidth: '500px'}}>
                    <p className="fs-5" style={{fontWeight: '600'}}>Добавить резюме в PDF</p>
                    </div>
                </div>
            </div>}


const edit_resume = () => {
}