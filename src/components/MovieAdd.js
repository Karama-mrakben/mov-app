import React ,{ useState} from 'react'
import {Modal,Button} from 'react-bootstrap'

function MovieAdd({add}) {
    const [newFilm,setNewFilm]=useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange =(event) =>{
        let  {name,value}=event.target;
        setNewFilm(el=>({...el,[name]:value}))
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ display:'flex', flexDirection:'column'}}>
          Title :<input name='Title' onChange={handleChange} />
          Year :<input name='Year' onChange={handleChange} />
          Poster :<input name='Poster' onChange={handleChange} />
          Rate :<input name='Rate' onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary"  onClick={()=>{add(newFilm);handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default MovieAdd
