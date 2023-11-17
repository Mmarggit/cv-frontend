export const Footer = () => {
    return <footer className='footer px-md-5 px-3 py-4 mt-auto' style={{minHeight:'100px', width:'100%', backgroundColor:'#F1F0FA'}}>
        <div className="m-auto d-flex flex-row flex-wrap">
            <div className="me-auto mb-3 mb-sm-0">
                <p className="mb-2 fs-6 text-wrap" style={{fontWeight:'500', color:'#849095'}}>© 2023, ООО "Хартл", официальный сайт</p>
                <a className="text-decoration-underline fs-6 text-wrap" href="https://hurtle.ru/policy" style={{color:'#6757F1', cursor: 'pointer'}}>Политика обработки персональных данных</a>
            </div>
        </div>
    </footer>
}