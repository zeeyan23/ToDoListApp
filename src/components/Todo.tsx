import React, { useRef, useState } from 'react';
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import classes from '../components/input.module.css';

const Home :React.FC<{onAddToDo:(text:string)=> void}>=(props) =>{

    const enteredText=useRef<HTMLInputElement>(null);
    const [stateValue, setStateValue] = useState<boolean>(false);

    function addTaskHandler(event: React.MouseEvent){

       const inputText=enteredText.current!.value;

       if(inputText.length===0){
        setStateValue(true);
        return;
       }

       props.onAddToDo(inputText);

       setStateValue(false);

       if (enteredText.current) {
            enteredText.current.value = '';
        }
       
    }

    return(
        <>
            <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
                <Col>
                    <Row className='mb-5'>
                        <h3 className='d-flex justify-content-center'>My ToDoList</h3>
                    </Row>
                    <Row>
                        <Container className={classes.inputContainer}>
                            <Row>
                                <Col xs={7}>
                                    <Form.Control type="text" ref={enteredText} placeholder="Enter description" />
                                </Col>
                                <Col>
                                    <Button variant="outline-success" type='button' onClick={addTaskHandler}>Add Task</Button>
                                </Col>
                            </Row>
                            {stateValue && <p className='text-danger'>Please Enter Task</p>}
                        </Container>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default Home;