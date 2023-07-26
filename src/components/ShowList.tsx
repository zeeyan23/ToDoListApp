import React, { useEffect, useState } from "react";
import { Container,Row,Col,Button } from 'react-bootstrap';
import classes from '../components/showlist.module.css';

const ShowList: React.FC<{task:string[];}>=(props)=>{

    const [tasks, setTasks] = useState<string[]>(props.task);
    const [taskStatus, setTaskStatus] = useState<{ [key: string]: boolean }>(
        props.task.reduce((acc, task) => ({ ...acc, [task]: false }), {})
      );
    
    useEffect(() => {
      setTasks(props.task);
    }, [props.task]);
    
    const deleteHandler = (item: string) => {
      const updatedTasks = tasks.filter((task) => task !== item);
      setTasks(updatedTasks);
    }
    
    const handleCheckboxChange = (item: string) => {
      setTaskStatus((prevTaskStatus) => ({
        ...prevTaskStatus,
        [item]: !prevTaskStatus[item]
      }));
    };

    return(
        <>
            <Container>
                {tasks.length > 0 && 
                <Row className="d-flex justify-content-end mt-3 totalCount">
                    <h6>Total count: {tasks.length}</h6>
                </Row>}
                <Col className={classes.test}>
                    {tasks.length <=0 && <p className="text-muted text-bold text-center mt-5">No Tasks found</p>}
                    {tasks.map((item, key) => (
                    <Row key={key} className="p-3 justify-content-center">
                        <Col xs={12} md={8}>
                        <div className={`shadow bg-body rounded`}>
                            <Row className={`align-items-center ${taskStatus[item] ? 'bg-success' : 'bg-light'}`} style={{ height: '4em' }}>
                            <Col xs={7} md={9}>
                                <p className={` ${taskStatus[item] ? 'text-light' : 'text-dark'}`}>{item}</p>
                            </Col>
                            <Col xs={2} md={1} className="d-flex justify-content-center">
                                <input
                                type="checkbox"
                                checked={taskStatus[item]}
                                onChange={() => handleCheckboxChange(item)}
                                className="form-check-input bg-secondary"
                                />
                            </Col>
                            <Col xs={2} md={2} className="d-flex justify-content-center">
                                <Button variant={`${taskStatus[item] ? 'outline-light' : 'outline-danger'}`} size="sm" onClick={() => deleteHandler(item)}>
                                Delete
                                </Button>
                            </Col>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                    ))}
                </Col>
            </Container>
        </>
    )
}

export default ShowList;