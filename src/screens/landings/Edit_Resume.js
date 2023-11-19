import { ReactComponent as PlusSvg } from '../../icons/plus.svg'
import { ReactComponent as ChatSvg } from '../../icons/chat.svg'
import { ReactComponent as IncomingSvg } from "../../icons/incoming.svg"
import { ReactComponent as ArrowDownSvg } from '../../icons/arrow-down.svg'
import { ReactComponent as ArrowUpSvg } from '../../icons/arrow-up.svg'
import { ReactComponent as TrashSvg } from '../../icons/trash.svg'
import { useContext, useEffect, useRef, useState } from "react"
import InputMask from 'react-input-mask';
import { DateInput, Input } from '@skbkontur/react-ui'
import context from 'react-bootstrap/esm/AccordionContext'
import { Button, Dropdown, DropdownButton,OverlayTrigger, Tooltip , Modal, Form, Container, Col, Row, ListGroup} from 'react-bootstrap'
import { switchTitle } from '../../constants'

export const Edit_Resume = () => {
    return <Main_Resume/>
}





function Main_Resume(props) {    
    const [elementState, setElementState] = useState({
        'Опыт работы' : [{id : 1, specialization : '123', company : 'hurtle', description : 'ba bl bla'}],
        'Образование' : [{id : 1, university : '', degree : '', description : '', date : ''}],
        'Активности' : [{id : 1, role : '', organization : '', description : ''}],
        'Навыки' : [{id : 1, skill : '', description : ''}],
        'Курсы и сертификаты' : [{id : 1, organization: '', date : '', description : ''}],
        'Свободный блок' : [{id : 1, title: '', description : ''}],
    })

    const [state, setState] = useState([
        {id: 1,
        active: true, 
        title : 'Опыт работы'},
        {id: 2,
            active: false, 
            title : 'Образование'},
        {id: 3,
            active: true, 
            title : 'Активности'},
        {id: 4,
            active: false, 
            title : 'Навыки'},
        {id: 5,
            active: false, 
            title : 'Курсы и сертификаты'},
        {id: 6,
            active: false, 
            title : 'Свободный блок'}])

    
    const findId = (title) => {
        return state.filter(el => el.title === title)[0].id
    }
    
    
    const downPart = (id, elState, title) => {
        let nextId = id

        for (let i = id; i < 6; i++) {
            if (state[i].active === true) {
                nextId = i + 1
                break
            }
        }

        
        setState((p) => p.map(el => {
            if (el.id === id) {
                el.id += nextId - id}
            else if (el.id === nextId) {
                el.id -= nextId - id
            } 
            return el
        } ))

        
    }



    const upPart = (id, elState, title) => {
        let prevId = id

        for (let i = id - 2; i >= 0; i--) {
            if (state[i].active === true) {
                prevId = i + 1
                break
            }
        }


        setState((p) => p.map(el => {
            if (el.id === id) {
                el.id -= id - prevId }
            else if (el.id === prevId) {
                el.id += id - prevId
            } 
            return el
        } ))

    }

    function getTag(title) {
        switch (title) {
            case 'Опыт работы':
                return <Work_Expirience setElementState={setElementState} savedState={elementState['Опыт работы']} setGlobalState={setState} findId={findId} downPart={downPart} upPart={upPart}/>
            case 'Образование':
                 return <Education setElementState={setElementState} savedState={elementState['Образование']} setGlobalState={setState} findId={findId} downPart={downPart} upPart={upPart}/>
            case 'Активности':
                 return <Activities setElementState={setElementState} savedState={elementState['Активности']} setGlobalState={setState} findId={findId} downPart={downPart} upPart={upPart}/>
            case 'Навыки': 
                 return <Skills setElementState={setElementState}  savedState={elementState['Навыки']} setGlobalState={setState} findId={findId} downPart={downPart} upPart={upPart}/>
            case 'Курсы и сертификаты': 
                return  <Courses setElementState={setElementState} savedState={elementState['Курсы и сертификаты']} setGlobalState={setState} findId={findId} downPart={downPart} upPart={upPart}/>
            case 'Свободный блок': 
                return <Other setElementState={setElementState} savedState={elementState['Свободный блок']} setGlobalState={setState} findId={findId} downPart={downPart} upPart={upPart}/>
        }
    }


    return <div>
    <Sidebar setToggleShown={setState} currentState={state}/>
    <div className="d-flex flex-row mx-auto mt-5" style={{gridAutoRows:'100px', minHeight:'100vh'}}>
    <div className="rounded-5 mx-auto px-5 py-4 w-100 mb-5 items-center justify-center" style={{border: 'none', maxWidth: '700px', width : 'fit-content' ,height:'fit-content'}}>
    <Main_Info/>
    <div className="h-px w-full bg-black-c" ></div>
    <Links/>
    <MonthYearInput/>
    {state.sort((a, b) => a.id > b.id ? 1: -1).map((part, i ) => <div style={part.active === false ? {display: 'none'} : {}}>
        {getTag(part.title)}</div>)}
    
    </div>
</div>
</div>
}




const Main_Info = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handlePhotoSelect = (e) => {
    setSelectedPhoto(URL.createObjectURL(e.target.files[0]));
    setShowModal(false);
    setShowButton(false);
  };

  const handleDeletePhoto = () => {
    setSelectedPhoto(null);
    setShowDropdown(false);
    setShowButton(true);
  };

  const handleEditPhoto = () => {
    setShowModal(true);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  
    return (
      <>
      <div className='container'><Contacts/></div>
        <div style={{ display: "flex" }}>
        {selectedPhoto && (
          <div style={{position: 'relative' }}>
            <img src={selectedPhoto} className='pb-1' style={{ maxWidth: '75%', maxHeight: '75%', borderRadius : '10px', objectFit: 'cover'}} onClick={toggleDropdown} />
            {showDropdown && (
              <Dropdown style={{ position: 'absolute', zIndex: '10' }}>
                <Button onClick={handleEditPhoto}>Изменить</Button>
                <Button onClick={handleDeletePhoto}>Удалить</Button>
              </Dropdown>
            )}
          </div>
        )}

        <div className="main-info" >
            <input style={{fontSize:'1.5rem'}}  id='editor' placeholder="Позиция"></input>
            <input placeholder="Имя Фамилия"></input>
            {showButton && (
          <Button onClick={() => setShowModal(true)} style={{ width: 'fit-content', color: 'gray', backgroundColor: 'white', border: 'none' }}>Фото</Button>
        )}
            <div className="d-flex col" style={{width: 'fit-content'}}>
                <TownDropdown/>
                <AgeDropdown/>

            </div>
            <textarea className='w-100 fs-12' style={{maxHeight: '100%', height: '200px'}} placeholder='Этот блок заполни после того, как закончишь резюме.
             Напиши 3-4 предложения, почему тебе интересна сфера деятельности или позиция в компании,
              если ты подаешь резюме на конкретную вакансию,
               чем твой опыт может быть полезен в этой роли, направлении.'></textarea>
            </div>
        </div>
              
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Выберите фотографию</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" accept="image/*" onChange={handlePhotoSelect} />
          </Modal.Body>
        </Modal>
        
      </>
    );
  };


function Contacts() {
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const [fields, setFields] = useState([
    { id: 1, label: 'Email', value: '', placeholder: 'someone@mail.ru' },
    { id: 2, label: 'Phone', value: '',  placeholder: '+7 (000) 000-00-00' },
    { id: 3, label: 'Telegram', value: '',  placeholder: '@someone' },
    { id: 4, label: 'WhatsUp', value: '',  placeholder: '+7 (000) 000-00-00' }
  ]);
  const [deletedFields, setDeletedFields] = useState([]);

  const addField = () => {
    const newFieldId = fields.length + 1;
    setFields([...fields, { id: newFieldId, label: 'Ссылка', value: 'https://' }]);
  };

  const updateField = (id, value) => {
    const updatedFields = [...fields];
    const index = updatedFields.findIndex((field) => field.id === id);
    updatedFields[index].value = value;
    setFields(updatedFields);
  };

  const removeField = (id) => {
    const removedField = fields.find((field) => field.id === id);
    const filteredFields = fields.filter((field) => field.id !== id);
    setFields(filteredFields);
    setDeletedFields([...deletedFields, removedField]);
  };

  const restoreField = (id) => {
    const restoredField = deletedFields.find((field) => field.id === id);
    const filteredDeletedFields = deletedFields.filter((field) => field.id !== id);
    setDeletedFields(filteredDeletedFields);
    setFields([...fields, restoredField]);
  };

  const handleDropdownToggle = (isOpen) => {
    setShowDropdown(isOpen);
    if (isOpen) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  };

  return (
    <DropdownButton show={showDropdown} onToggle={handleDropdownToggle} className='btn' title="Контакты" id="dropdown-button-2"
     style={{border : 'none', position: 'absolute', top: '10px', right: '10px'}}>
      <Container style={{width: '300px'}}>
        {fields.map((field, index) => (
          <Row key={field.id}>
            <div>{field.label}</div>
            <input
              type="text"
              value={field.value}
              onChange={(e) => updateField(field.id, e.target.value)}
              placeholder={field.placeholder}
              ref={inputRef}
              
            />
            <Button variant="link" onClick={() => removeField(field.id)}>
              Удалить
            </Button>
          </Row>
        ))}
        {deletedFields.filter(field => field.label != 'Ссылка').map((field) => (
          <Button
            key={field.id}
            variant="outline-secondary"
            onClick={() => restoreField(field.id)}
          >
            {field.label}
          </Button>
        ))}
      </Container>
      <Button variant="success" onClick={addField}>
        Cсылка
      </Button>
      <button style={{position: 'absolute', top: '10px', right: '10px'}} onClick={() => setShowDropdown(false)}>Закрыть</button>
    </DropdownButton>
  );
};



const Links = () => {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState({ label: '', url: '' });

  const handleAddLink = () => {
    setLinks([...links, newLink]);
    setNewLink({ label: '', url: '' });
  };

  const handleDeleteLink = (index) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
  };

  return (
    <div>
      <Dropdown className='mt-3'>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Добавить ссылку
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Form>
            <Form.Group>
              <Form.Label>Название</Form.Label>
              <Form.Control 
                type="text" 
                value={newLink.label} 
                onChange={(e) => setNewLink({ ...newLink, label: e.target.value })} 
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ссылка</Form.Label>
              <Form.Control 
                type="text" 
                value={newLink.url} 
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })} 
              />
            </Form.Group>
            <Button onClick={handleAddLink}>Подтвердить</Button>
          </Form>
        </Dropdown.Menu>
      </Dropdown>
      <ListGroup>
  {links.map((link, index) => (
    <ListGroup.Item key={index}>
      <div className="d-flex justify-content-between align-items-center">
        <a href={link.url.startsWith('http') ? link.url : `https://${link.url}`} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
        <Button variant="danger" size="sm" onClick={() => handleDeleteLink(index)}>X</Button>
      </div>
    </ListGroup.Item>
  ))}
</ListGroup>
    </div>
  );
};

export default Links;


function Work_Expirience({setGlobalState, findId, downPart, upPart, savedState, setElementState}){
    const [state, setState] = useState(savedState)

    useEffect(() => {
      setElementState((prevState) => ({
        ...prevState,
        ['Опыт работы']: state
        }))
      ;
    }, [state]);
  

    return <div className='flex-col mb-1' style={{display: 'inline-table', alignItems:'start'}} onChange={() => setElementState((prevState) => ({
      ...prevState,
      ['Опыт работы']: state
      }))}>
        <div className="" style={{fontSize: "1.9rem" ,maxHeight:'50px', maxWidth: 'fit-content', display: 'inline-table'}}>Опыт работы</div>
            <div className='btn-group'  role="group" style={{marginLeft: '10px', marginBottom: '10px', borderRadius: '2px'}}>
                <button type="button" class="btn btn-outline-secondary" onClick={() => [setState(p => ([ ...p, {id: Date.now() , specialization: '', company: '', description : ''} ]))]}><PlusSvg/></button>
                <button type="button" class="btn btn-outline-secondary" onClick={() => downPart(findId('Опыт работы'), state, 'Опыт работы')}><ArrowDownSvg stroke='black' /></button>
                <button  type="button" class="btn btn-outline-secondary" onClick={() => upPart(findId('Опыт работы'), state, 'Опыт работы')}><ArrowUpSvg stroke='black' /></button>
                <button type="button" className='btn btn-outline-secondary' onClick={() => [setGlobalState((p) => p.map(el => {
                                if (el.title === 'Опыт работы') {el.active=false} return el})), setState(p => [])]} style={{ color: 'black'}} ><TrashSvg/></button>
                
        </div  >
        <div>
        {state.map((el, i) => <WE_Element data={el} key={i} index={i} setState={setState} />)}</div>
        </div>
  
}

const WE_Element = ({data, setState, index}) => {
  const swapItems = (direction) => {
      setState((prevState) => {
        const newState = [...prevState];
        const temp = newState[index];
        if (direction === 'up' && index > 0) {
          newState[index] = newState[index - 1];
          newState[index - 1] = temp;
        } else if (direction === 'down' && index < newState.length - 1) {
          newState[index] = newState[index + 1];
          newState[index + 1] = temp;
        }
        return newState;
      });
    };

  
  return <div className='work-expirience'>
  <div className="mb-3 d-flex col" style={{ alignItems:'baseline'}}>
  <div className='btn-group-vertical' role="group" style={{marginLeft: '-60px', marginRight : '10px', marginBottom: '10px', borderRadius: '2px', display : ''}}>
              <button  type="button" class="btn btn-outline-secondary" onClick={() => swapItems('up')}><ArrowUpSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => swapItems('down')}><ArrowDownSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => setState(prevState => prevState.filter((_, i) => i !== index))}><TrashSvg/></button>
              
              </div>
      <div className="row">
          <input value={data.specialization} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.specialization = e.target.value
          }
          return el
      } ))} className="pb-4 pt-2" cols='1' style={{fontSize:'1.2rem', maxWidth: '20px', minWidth:'300px'}} placeholder="Должность, позиция"></input>
          <input value={data.company} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.company = e.target.value
          }
          return el
      } ))} cols='1' style={{height: '1.5rem', maxWidth:'200px'}} placeholder="Компания"></input>
          <p>Здесь будет дата</p>
      </div>
      <textarea value={data.description} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.description = e.target.value
          }
          return el
      } ))}
       className="p" style={{fontSize:'0.9rem' , minWidth:'400px', minHeight:'70px', minWidth:'400px'}}
      placeholder="Опишите конкретные задачи, которые решали. Далее обязательно расскажите, какие результаты были достигнуты за время работы."></textarea>

  </div>
  </div>

}





function Education({setGlobalState, findId, downPart, upPart, savedState, setElementState}){
    const [state, setState] = useState(savedState)

    useEffect(() => {
      setElementState((prevState) => ({
        ...prevState,
        ['Образование']: state
        }))
      ;
    }, [state]);

    return <div className='flex-col mb-1' style={{display: 'inline-table', alignItems:'start'}}>
        <div className="" style={{fontSize: "1.9rem" ,maxHeight:'50px', maxWidth: 'fit-content', display: 'inline-table'}}>Образование</div>
        <div className='btn-group' role="group" style={{marginLeft: '10px', marginBottom: '10px', borderRadius: '2px'}}>
        <button type="button" class="btn btn-outline-secondary" onClick={() => setState(p => ([ ...p, {id: Date.now(), university: '', degree: '', description : ''} ]))}><PlusSvg/></button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => downPart(findId('Образование'), state, 'Образование')}><ArrowDownSvg stroke='black' /></button>
        <button  type="button" class="btn btn-outline-secondary" onClick={() => upPart(findId('Образование'), state, 'Образование')}><ArrowUpSvg stroke='black' /></button>
        <button type="button" className='btn btn-outline-secondary' onClick={() => [setGlobalState((p) => p.map(el => {
                                if (el.title === 'Образование') {el.active=false} return el})), setState(p => [])]} style={{ color: 'black'}} ><TrashSvg/></button>
        </div>
        {state.map((el, i) => <ED_Element data={el} key={i} index={i} setState={setState} />)}
        </div>
        }


const ED_Element = ({data, setState, index}) => {
  const swapItems = (direction) => {
      setState((prevState) => {
        const newState = [...prevState];
        const temp = newState[index];
        if (direction === 'up' && index > 0) {
          newState[index] = newState[index - 1];
          newState[index - 1] = temp;
        } else if (direction === 'down' && index < newState.length - 1) {
          newState[index] = newState[index + 1];
          newState[index + 1] = temp;
        }
        return newState;
      });
    };


return <div className="education">
  <div className="d-flex col " style={{ alignItems:'baseline'}}>
  <div className='btn-group-vertical' role="group" style={{marginLeft: '-60px', marginRight : '10px', marginBottom: '10px', borderRadius: '2px', display : ''}}>
              <button  type="button" class="btn btn-outline-secondary" onClick={() => swapItems('up')}><ArrowUpSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => swapItems('down')}><ArrowDownSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => setState(prevState => prevState.filter((_, i) => i !== index))}><TrashSvg/></button>
              </div>
      <div className="row">
      <input value={data.university} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.university = e.target.value
          }
          return el
      } ))} className="pb-1 pt-1 h-1.9" style={{fontSize:'1.2rem', minWidth:"300px"}} cols='1' placeholder="Название учреждения"></input>
      <input value={data.degree} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.degree = e.target.value
          }
          return el
      } ))} className="pb-3" placeholder="Степень"></input>
      <YearYearInput />
      </div>
      <textarea value={data.description} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.description = e.target.value
          }
          return el
      } ))} className="p" style={{fontSize:'0.9rem' , minWidth:'400px', minHeight:'70px', minWidth:'400px'}} 
      placeholder="Укажите название образовательной программы или специализации. Расскажите подробнее о ваших активностях в университете."></textarea>
  </div>
</div>}


function Skills({setGlobalState, findId, downPart, upPart,savedState, setElementState}){
    const [state, setState] = useState(savedState)

    useEffect(() => {
      setElementState((prevState) => ({
        ...prevState,
        ['Навыки']: state
        }))
    }, [state]);


    return <div className='d-flex-col' style={{display: 'inline-table', alignItems:'start'}}>
    <div className="" style={{fontSize: "1.9rem" ,maxHeight:'50px', maxWidth: 'fit-content', display: 'inline-table'}}>Навыки</div>
    <div className='btn-group' role="group" style={{marginLeft: '10px', marginBottom: '10px', borderRadius: '2px'}}>
    <button type="button" class="btn btn-outline-secondary" onClick={() => setState(p => ([ ...p, {id: Date.now(), skill: '', description : ''} ]))}><PlusSvg/></button>
    <button type="button" class="btn btn-outline-secondary" onClick={() => downPart(findId('Навыки'), state, 'Навыки')}><ArrowDownSvg stroke='black' /></button>
    <button  type="button" class="btn btn-outline-secondary" onClick={() => upPart(findId('Навыки'), state, 'Навыки')}><ArrowUpSvg stroke='black' /></button>
    <button type="button" className='btn btn-outline-secondary' onClick={() => [setGlobalState((p) => p.map(el => {
                                if (el.title === 'Навыки') {el.active=false} return el})), setState(p => [])]} style={{ color: 'black'}}><TrashSvg/></button>
    </div>
    <div className='element-container'>{state.map((el, i) => <S_Element data={el} key={i} index={i} setState={setState}/>)}</div>
    </div>
}

const S_Element = ({data, setState, index}) => {
  const swapItems = (direction) => {
      setState((prevState) => {
        const newState = [...prevState];
        const temp = newState[index];
        if (direction === 'up' && index > 0) {
          newState[index] = newState[index - 1];
          newState[index - 1] = temp;
        } else if (direction === 'down' && index < newState.length - 1) {
          newState[index] = newState[index + 1];
          newState[index + 1] = temp;
        }
        return newState;
      });
    };



return <div className='skill' style={{maxWidth: '200px', marginRight: '50px'}}>
<div 
className='d-flex' style={{ alignItems:'baseline'}}>
  <div className='btn-group-vertical' role="group" style={{marginLeft: '-60px', marginRight : '10px', marginBottom: '10px', borderRadius: '2px', display : ''}}>
              <button  type="button" class="btn btn-outline-secondary" onClick={() => swapItems('up')}><ArrowUpSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => swapItems('down')}><ArrowDownSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => setState(prevState => prevState.filter((_, i) => i !== index))}><TrashSvg/></button>
              </div>
  <div className='row' >
  <div className='mb-1'>
  <span className='fs-3' style={{width : 'fit-content'}}>#</span>
  <input className='fs-3' onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.skill = e.target.value
          }
          return el
      } ))} value={data.skill} placeholder='Навык'></input>
      </div>
  <textarea onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.description = e.target.value
          }
          return el
      } ))} value={data.description} style={{maxWidth : '200px'}} placeholder='Описание'></textarea>
  </div>

  </div></div>}


function Activities({setGlobalState, findId, downPart, upPart, savedState, setElementState}){

    const [state, setState] = useState(savedState)

    useEffect(() => {
      setElementState((prevState) => ({
        ...prevState,
        ['Активности']: state
        }))
    }, [state]);

    return <div className='flex-col mb-1' style={{display: 'inline-table', alignItems:'start'}} >
    <div className="" style={{fontSize: "1.9rem" ,maxHeight:'50px', maxWidth: 'fit-content', display: 'inline-table'}}>Активности</div>
    <div className='btn-group' role="group" style={{marginLeft: '10px', marginBottom: '10px', borderRadius: '2px'}}>
    <button type="button" class="btn btn-outline-secondary" onClick={() => setState(p => ([ ...p, {id: Date.now(), role: '', organization: '', description : ''} ]))}><PlusSvg/></button>
    <button type="button" class="btn btn-outline-secondary"  onClick={() => downPart(findId('Активности'), state, 'Активности')}><ArrowDownSvg stroke='black' /></button>
    <button  type="button" class="btn btn-outline-secondary"  onClick={() => upPart(findId('Активности'), state, 'Активности')}><ArrowUpSvg stroke='black' /></button>
    <button type="button" className='btn btn-outline-secondary' onClick={() => [setGlobalState((p) => p.map(el => {
                                if (el.title === 'Активности') {el.active=false} return el})), setState(p => [])]} style={{ color: 'black'}}><TrashSvg/></button>
    </div>
    {state.map((el, i) => <A_Element data={el} key={i} index={i} setState={setState} />)}
    </div>
}

const A_Element = ({data, setState, index}) => {
  const swapItems = (direction) => {
      setState((prevState) => {
        const newState = [...prevState];
        const temp = newState[index];
        if (direction === 'up' && index > 0) {
          newState[index] = newState[index - 1];
          newState[index - 1] = temp;
        } else if (direction === 'down' && index < newState.length - 1) {
          newState[index] = newState[index + 1];
          newState[index + 1] = temp;
        }
        return newState;
      });
    };


  return <div className='activities'>
  <div className="d-flex col" style={{ alignItems:'baseline'}}>
  <div className='btn-group-vertical' role="group" style={{marginLeft: '-60px', marginRight : '10px', marginBottom: '10px', borderRadius: '2px', display : ''}}>
              <button  type="button" class="btn btn-outline-secondary" onClick={() => swapItems('up')}><ArrowUpSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => swapItems('down')}><ArrowDownSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => setState(prevState => prevState.filter((_, i) => i !== index))}><TrashSvg/></button>
              
              </div>
      <div className="row">
      <input value={data.role} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.role = e.target.value
          }
          return el
      } ))} className="pb-1 pt-1 h-1.9" style={{fontSize:'1.2rem', minWidth:"300px"}} cols='1' placeholder="Роль"></input>
      <input onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.organization = e.target.value
          }
          return el
      } ))} value={data.organization} className="pb-3" placeholder="Организация или место"></input>
      <p>Здесь будет дата</p>
      </div>
      <textarea onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.description = e.target.value
          }
          return el
      } ))} value={data.description} className="p" style={{fontSize:'0.9rem' , minWidth:'400px', minHeight:'70px', minWidth:'400px'}}
   placeholder="Опишите конкретные задачи, которые решали. Далее обязательно расскажите, какие результаты были достигнуты за время работы."></textarea>
  </div>
</div>}

function Courses({setGlobalState, findId, downPart, upPart, savedState, setElementState}){
    const [state, setState] = useState(savedState)

    useEffect(() => {
      setElementState((prevState) => ({
        ...prevState,
        ['Курсы и сертификаты']: state
        }))
    }, [state]);


    return <div className='flex-col mb-1' style={{display: 'inline-table', alignItems:'start'}}>
        <div className="" style={{fontSize: "1.9rem" ,maxHeight:'50px', maxWidth: 'fit-content', display: 'inline-table'}}>Курсы и сертификаты</div>
        <div className='btn-group' role="group" style={{marginLeft: '10px', marginBottom: '10px', borderRadius: '2px'}}>
        <button type="button" class="btn btn-outline-secondary" onClick={() => setState(p => ([ ...p, {id: Date.now(), organization: '', date: '', description : ''} ]))}><PlusSvg/></button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => downPart(findId('Курсы и сертификаты'), state, 'Курсы и сертификаты')}><ArrowDownSvg stroke='black' /></button>
        <button  type="button" class="btn btn-outline-secondary" onClick={() => upPart(findId('Курсы и сертификаты'), state, 'Курсы и сертификаты')}><ArrowUpSvg stroke='black' /></button>
        <button type="button" className='btn btn-outline-secondary' onClick={() => [setGlobalState((p) => p.map(el => {
                                if (el.title === 'Курсы и сертификаты') {el.active=false} return el})), setState(p => [])]} style={{ color: 'black'}}><TrashSvg/></button>
        </div>
        {state.sort((a, b) => a.id > b.id ? 1: -1).map((el, i) => <C_Element data={el} key={i} index={i} setState={setState} />)}
        </div>
}


const C_Element = ({data, setState, index}) => {
  const swapItems = (direction) => {
      setState((prevState) => {
        const newState = [...prevState];
        const temp = newState[index];
        if (direction === 'up' && index > 0) {
          newState[index] = newState[index - 1];
          newState[index - 1] = temp;
        } else if (direction === 'down' && index < newState.length - 1) {
          newState[index] = newState[index + 1];
          newState[index + 1] = temp;
        }
        return newState;
      });
    };
  
  return <div className="courses">
  <div className="d-flex col" style={{ alignItems:'baseline'}}>
  <div className='btn-group-vertical' role="group" style={{marginLeft: '-60px', marginRight : '10px', marginBottom: '10px', borderRadius: '2px', display : ''}}>
              <button  type="button" class="btn btn-outline-secondary" onClick={() => swapItems('up')}><ArrowUpSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => swapItems('down')}><ArrowDownSvg stroke='black' /></button>
              <button type="button" class="btn btn-outline-secondary" onClick={() => setState(prevState => prevState.filter((_, i) => i !== index))}><TrashSvg/></button>
              
              </div>
      <div className="row">
      <input value={data.organization} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.organization = e.target.value
          }
          return el
      } ))} className="pb-1 pt-1 h-1.9" style={{fontSize:'1.2rem', minWidth:"300px"}} cols='1' placeholder="Название учреждения"></input>
      <input value={data.date} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.date = e.target.value
          }
          return el
      } ))} className="pb-3" maxLength='4' type="" placeholder="гггг" ></input>
      </div>
      <textarea value={data.description} onChange={e => setState(p => p.map((el, i) => {
          if (i  === index) {
              el.description = e.target.value
          }
          return el
      } ))} className="p" style={{fontSize:'0.9rem' , minWidth:'400px', minHeight:'70px', minWidth:'400px'}}
   placeholder="Укажите название образовательной программы или специализации. Если были проекты для портфолио, укажите ссылки."></textarea>
  </div>
</div>}

function Other({setGlobalState, findId, downPart, upPart, savedState, setElementState}){

    const [state, setState] = useState(savedState)

    useEffect(() => {
      setElementState((prevState) => ({
        ...prevState,
        ['Свободный блок']: state
        }))
    }, [state]);


        return <div className='flex-col mb-1' style={{display: 'inline-table', alignItems:'start'}}>
        <div className="" style={{fontSize: "1.9rem" ,maxHeight:'50px', maxWidth: 'fit-content', display: 'inline-table'}}>Cвободный блок</div>
        <div className='btn-group' role="group" style={{marginLeft: '10px', marginBottom: '10px', borderRadius: '2px'}}>
        <button type="button" class="btn btn-outline-secondary" onClick={() => setState(p => ([ ...p, {id: Date.now(), title: '', description : ''} ]))}><PlusSvg/></button>
        <button type="button" class="btn btn-outline-secondary" onClick={() => downPart(findId('Свободный блок'), state, 'Свободный блок')}><ArrowDownSvg stroke='black' /></button>
        <button  type="button" class="btn btn-outline-secondary" onClick={() => upPart(findId('Свободный блок'), state, 'Свободный блок')}><ArrowUpSvg stroke='black' /></button>
        <button type="button" className='btn btn-outline-secondary' onClick={() => [setGlobalState((p) => p.map(el => {
                                    if (el.title === 'Свободный блок') {el.active=false} return el})), setState(p => [])]} style={{ color: 'black'}}><TrashSvg/></button>
        </div>
        {state.map((el, i) => <O_Element data={el} key={i} index={i} setState={setState} />)}
    </div>
}


const O_Element = ({data, setState, index}) => {
  const swapItems = (direction) => {
      setState((prevState) => {
        const newState = [...prevState];
        const temp = newState[index];
        if (direction === 'up' && index > 0) {
          newState[index] = newState[index - 1];
          newState[index - 1] = temp;
        } else if (direction === 'down' && index < newState.length - 1) {
          newState[index] = newState[index + 1];
          newState[index + 1] = temp;
        }
        return newState;
      });
    };

  return <div className="other" >
  <div className=''>
      <div className='btn-group-vertical ' role="group"  style={{marginLeft: '-60px', marginRight : '10px', marginBottom: '-70px', borderRadius: '2px', display : ''}}>
                  <button  type="button" class="btn btn-outline-secondary" onClick={() => swapItems('up')}><ArrowUpSvg stroke='black' /></button>
                  <button type="button" class="btn btn-outline-secondary" onClick={() => swapItems('down')}><ArrowDownSvg stroke='black' /></button>
                  <button type="button" class="btn btn-outline-secondary" onClick={() => setState(prevState => prevState.filter((_, i) => i !== index))}><TrashSvg/></button>
                  
                  </div>
      <input value={data.title} onChange={e => setState(p => p.map((el, i) => {
              if (i  === index) {
                  el.title = e.target.value
              }
              return el
          } ))} className="pb-1 pt-1 fs-2" style={{minWidth:"300px"}} cols='1' placeholder="Заголовок"></input>
      <textarea onChange={e => setState(p => p.map((el, i) => {
              if (i  === index) {
                  el.description = e.target.value
              }
              return el
          } ))} value={data.description} className="" style={{fontSize:'1rem' , minWidth:'400px', minHeight:'70px', width:'100%'}}
      placeholder="Расскажите больше о себе. Напишите о своих интересах. Например, занятия в волейбольном кружке могут говорить о твоём умении работать в команде."></textarea>
  </div>
</div>}

function Sidebar({setToggleShown, currentState}){
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return <nav className="sidebar">
        <div className="container" style={{borderBottom: 'solid var(---primary) 1px ', height: 'fit-content', width: '100%', alignContent:'baseline'}}>
            <div className="bloc-tabs space-x-4" style={{ alignContent:'baseline'}} >
                <button><PlusSvg fill={toggleState === 1 ? 'red' : 'black'} height='50px' onClick={() => toggleTab(1)}/></button>
                <button><ChatSvg stroke={toggleState === 2 ? 'red' : 'black'} onClick={() => toggleTab(2)}/></button>
                <button><IncomingSvg stroke={toggleState === 3 ? 'red' : 'black'} onClick={() => toggleTab(3)}/></button>
            </div>
        </div>
        <div className="content-tabs">
        <div className={toggleState === 1 ? "content active-content" : 
            "content"}><Parts setToggleShown={setToggleShown} state={currentState}/></div>
        <div className={toggleState === 2 ? "content active-content" : 
            "content"}>2</div>
        <div className={toggleState === 3 ? "content active-content" : 
            "content"}>3</div>
    </div>
    </nav>
} 


function Parts({setToggleShown, state}){

    function currentState(title) {return state.map((part) => {if (part.title == title) return part.active}).filter((el) => {if (typeof el != undefined) return el})[0]}


    
    return <div className="parts">
        <h1 style={{fontSize:'1.5rem'}}>Секции</h1>
        <div style={{fontSize:'0.75rem', color: '#a0a0a0', marginBottom: '10px'}}>Секции добавляются в конец резюме, дальше вы можете перетащить в удобное место по мере значимости.</div>
        <h2 style={{fontSize:'1.25rem'}}>Глобальные секции</h2>
        <button className={currentState("Опыт работы") === true ? "button-off" : ""}
            onClick={(p) => [setToggleShown((p) => p.map((el) => {
            if (el.title === "Опыт работы") {
                el.active=true
            } return el 
        }))]}>Опыт работы</button>
        <button className={currentState("Образование") === true ? "button-off" : ""}
         onClick={(p) => [setToggleShown((p) => p.map((el) => {
            if (el.title === "Образование") {
                el.active=true
            } return el 
        }))]}>Образование</button>
        <button 
        className={currentState("Активности") === true ? "button-off" : ""} 
        onClick={(p) => [setToggleShown((p) => p.map((el) => {
            if (el.title === "Активности") {
                el.active=true
            } return el 
        }))]}>Активности</button>
        <button className={currentState("Навыки") === true ? "button-off" : ""}
         onClick={(p) => [setToggleShown((p) => p.map((el) => {
            if (el.title === "Навыки") {
                el.active=true
            } return el 
        }))]}>Навыки</button>
        <button 
        className={currentState("Курсы и сертификаты") === true ? "button-off" : ""}
        onClick={(p) => [setToggleShown((p) => p.map((el) => {
            if (el.title === "Курсы и сертификаты") {
                el.active=true
            } return el 
        }))]}>Курсы и сертификаты</button>
        <button className={currentState("Свободный блок") === true ? "button-off" : ""}
         onClick={(p) => [setToggleShown((p) => p.map((el) => {
            if (el.title === "Свободный блок") {
                el.active=true
            } return el 
        }))]}>Свободный блок</button>
    </div>

}


const TownDropdown = () => {
    const [inputValue, setInputValue] = useState('');
    const [buttonText, setButtonText] = useState('Город');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const inputRef = useRef(null);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleConfirm = () => {
      setButtonText(inputValue);
    };
  
    const handleDelete = () => {
      setInputValue('');
      setButtonText('Город');
    };
  
    const handleDropdownToggle = (isOpen) => {
      setShowDropdown(isOpen);
      if (isOpen) {
        setTimeout(() => inputRef.current.focus(), 0);
      }
    };
  
    return (
      <DropdownButton 
        title={buttonText}
        show={showDropdown}
        onToggle={handleDropdownToggle}
        id='dropdown-btn'
        className='btn' style={{border : 'none'}}
      >
        <span>Город</span>
          <input className='bg-info'
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={() => setShowDropdown(true)}
          />
        <Dropdown.Divider />
        <Dropdown.Item as="div">
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={handleConfirm}>Подтвердить</button>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <button onClick={() => setShowDropdown(false)}>Закрыть</button>
        </Dropdown.Item>
      </DropdownButton>
    );
  };


const AgeDropdown = () => {
    const [inputValue, setInputValue] = useState('');
    const [buttonText, setButtonText] = useState('Возраст');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const inputRef = useRef(null);

    function formatAge(age) {
        if (age % 10 === 1 && age !== 11) {
          return age + ' год';
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age < 10 || age > 20)) {
          return age + ' года';
        } else {
          return age + ' лет';
        }
      }

    function calculateAge(dateString) {
        var parts = dateString.split('.');
        // В JS, месяцы отсчитываются от 0 до 11, поэтому отнимаем 1 от номера месяца
        var dateObject = new Date(parts[2], parts[1] - 1, parts[0]);
        var today = new Date();
        var age = today.getFullYear() - dateObject.getFullYear();
        var monthDiff = today.getMonth() - dateObject.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateObject.getDate())) {
          age--;
        }
        return formatAge(age);
      }
      
  
    const handleInputChange = (e) => {
      setInputValue(e);
    };
  
    const handleConfirm = () => {
      setButtonText(calculateAge(inputValue));
    };
  
    const handleDelete = () => {
      setInputValue('');
      setButtonText('Возраст');
    };
    const handleCalendarClick = (e) => {
    e.stopPropagation(); // Предотвращает всплытие события клика до родительских элементов
  };
  
    const handleDropdownToggle = (isOpen) => {
      setShowDropdown(isOpen);
      if (isOpen) {
        setTimeout(() => inputRef.current.focus(), 0);
      }
    };
  
    return (
      <DropdownButton 
        title={buttonText}
        show={showDropdown}
        onToggle={handleDropdownToggle}
        id='dropdown-btn'
        className='btn' data-toggle="dropdown" style={{border : 'none'}}
        toggle={false}>
        <span>Дата рождения</span>
          <DateInput 
            type="text"
            ref={inputRef}
            value={inputValue}
            onValueChange={handleInputChange}
            onClick={handleCalendarClick}
          />
        <Dropdown.Divider />
        <Dropdown.Item as="div">
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={handleConfirm}>Подтвердить</button>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <button onClick={() => setShowDropdown(false)}>Закрыть</button>
        </Dropdown.Item>
      </DropdownButton>
    );
  };

  const YearInputDropdown = ({setData, index, value}) => {
    const [year1, setYear1] = useState('');
    const [year2, setYear2] = useState('');
    const [dropdownTitle, setDropdownTitle] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);
  
    const confirmHandler = () => {
      setData(p => p.map((el, i) => {
        if (i  === index) {
            el.date = `${year1} – ${year2}`
        }
        return el
    } ))
      setDropdownTitle(`${year1} – ${year2}`);
    };
  
    const clearHandler = () => {
      setDropdownTitle('гггг – гггг');
      setShowDropdown(false);
      setYear1('');
      setYear2('');
    };
  
    return (
      <Dropdown show={showDropdown} onToggle={(shown) => setShowDropdown(shown)}>
        <Dropdown.Toggle className='btn' id='dropdown-btn' variant="success">
          {dropdownTitle}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Row className="year-input-row"> 
            <Col>
              <Form.Group controlId="year1">
                <Form.Control
                  type="number"
                  value={year1}
                  placeholder="гггг"
                  onChange={(e) => setYear1(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="dash">—</Col>
            <Col>
              <Form.Group controlId="year2">
                <Form.Control
                  type="number"
                  value={year2}
                  placeholder="гггг"
                  onChange={(e) => setYear2(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" onClick={confirmHandler}>Подтвердить</Button>{' '}
          <Button variant="danger" onClick={clearHandler}>Удалить</Button>
          <button onClick={() => setShowDropdown(false)}>Закрыть</button>
          
        </Dropdown.Menu>
      </Dropdown>
    );
  };
  

  const MonthYearInput = () => {
    const handleChange = (e) => {
      // Обработка введенного значения
    };
  
    return (
      <div>
        <InputMask mask="99.9999" maskChar="_" onChange={handleChange}>
          {(inputProps) => <input {...inputProps} type="text" />}
        </InputMask>
      </div>
    );
  };
  

  const YearYearInput = () => {
    const handleChange = (e) => {
      // Обработка введенного значения
    };
  
    return (
      <div>
        <InputMask style={{border: 'solid 1px black'}} mask="9999-9999" maskChar="_" onChange={handleChange}>
          {(inputProps) => <input {...inputProps} type="text" />}
        </InputMask>
      </div>
    );
  };