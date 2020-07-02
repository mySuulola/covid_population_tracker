import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTask } from '../store/action';


const TaskDisplayField = ({addTask, taskArray}) => {

    const [task, setTask] = useState("");

    const submitForm = () => {
     addTask({id: taskArray.length + 1, item: task})
        setTask('');
    }

    return (
        <div className="row p-5">
            <input 
            value={task}
            onChange={e => setTask(e.target.value)} 
            type="text" className="form-control"/>
            <button 
            onClick={submitForm}
            
            className="btn btn-primary">Add To Task</button>
        </div>
    )
}

const mapStateToProps = state => ({
    taskArray: state.allTasks
})




export default connect(mapStateToProps, { addTask })(TaskDisplayField)
