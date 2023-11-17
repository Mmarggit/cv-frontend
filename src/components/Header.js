import { Button, Nav, Navbar, NavbarCollapse } from "react-bootstrap"
import { COLORS } from "../constants"
import { useNavigate } from "react-router-dom"



export const Header = () => {
    const navigate = useNavigate()
    return <div className="mx-auto d-flex w-100" style={{maxWidth:'1500px'}}>
        <Navbar className='navbar-expand-lg mb-lg-5 mb-3 w-100'>
        <div className="container-fluid ">
            <Navbar.Brand className="navbar-brand my-2 me-5">
                <img src={'https://resource.hurtle.ru/hurtle-logo.svg'} style={{height:'35px', maxWidth:'150px', width:'100%'}}/>
            </Navbar.Brand>
            <NavbarCollapse className="navbar-brand my-2 me-5" id='responsive-navbar-nav'>
                <Nav className="d-flex flex-row flex-wrap align-items-center justify-content-between w-100">
                <div className="d-flex flex-column flex-lg-row flex-wrap my-2">
                <Nav.Link onClick={() => navigate('/')} style={{color:COLORS.primary, fontWeight: '600'}}>Конструктор резюме</Nav.Link>
                <Nav.Link onClick={() => a()} style={{color:COLORS.header_text, fontWeight: '600'}}>Контакты</Nav.Link>
                </div>
                <Button onClick={() => auth_in_hh()} style={{color:'white', backgroundColor: '#F8485D', border:'0px'}} className="btn rounded-2 px-5 py-2">Войти через hh.ru</Button>
                </Nav>
            </NavbarCollapse>
        </div>

        </Navbar>
    </div>
}

function a() {

}

// style={{color:'white', background-color: '#F8485D'}}
function auth_in_hh() {
    
}

//navbar navbar-expand-lg mb-lg-5 mb-3