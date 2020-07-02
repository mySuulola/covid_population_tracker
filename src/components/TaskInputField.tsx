import React from 'react'
import { connect } from 'react-redux'

const TaskInputField = ({ taskArray }) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                    </tr>
                </thead>
                <tbody>
                    {taskArray.map(task => (
                        <tr key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskArray: state.allTasks
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInputField)
