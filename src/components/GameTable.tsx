import React  from 'react';
import { connect } from 'react-redux';
import { Button } from '../common/Button';
import './css/GameTable.css'


const GameTable = ({ events }) => {

  return (
    <div className="container mt-5">
      <table className="table rounded table-borderless">
        <thead>
          <tr>
            <th scope="col">S/N</th>
            <th scope="col">Event Name</th>
            <th className="d-none d-md-table-cell" scope="col">Organization Name</th>
            <th className="d-none d-md-table-cell" scope="col">Location</th>
            <th scope="col">Space Left</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, i) => (
            <tr key={Math.random()}>
              <th scope="row">{i + 1}</th>
              <td>{event.eventName}</td>
              <td className="d-none d-md-table-cell">{event.organizationName}</td>
              <td className="d-none d-md-table-cell">{event.location}</td>
              <td>{event.spaceLeft}</td>
              <td>
                <Button className="btn" backgroundColor="transparent" textColor="white" borderColor="#e6bf49" actualText="Details" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  events: state.eventReducer.events
})

const mapDispatchToProps = null


export default connect(mapStateToProps, mapDispatchToProps)(GameTable)
