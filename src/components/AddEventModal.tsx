import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addNewEvent } from '../store/reducer/action';

function useFormFields<T>(initialValues: any) {
    const [formFields, setFormFields] = React.useState<any>(initialValues);
    const createChangeHandler = (key: keyof any) => (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = e.target.value;
        setFormFields((prev: any) => ({ ...prev, [key]: value }));
    };
    return { formFields, createChangeHandler };
}


const AddEventModal = ({addNewEvent}) => {

    const { formFields, createChangeHandler } = useFormFields({
        eventName: "",
        organizationName: "",
        posterName: "Suulola Oluwaseyi",
        location: "",
        spaceLeft: 20,
        currentPopulationCount: 0,
        
    });

    const handleSubmit = (formData: React.FormEvent) => {
        console.log(formData)
        addNewEvent(formData);
    };

    return (
        <div className="modal fade" id="addEventModal" tabIndex={-1} role="dialog" aria-labelledby="addEventModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addEventModalLabel">Add Event</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="eventName">Event Name</label>
                                <input
                                    type="text"
                                    id="eventName"
                                    value={formFields.email}
                                    onChange={createChangeHandler("eventName")}
                                />
                            </div>
                            <div>
                                <label htmlFor="organizationName">Organization Name</label>
                                <input
                                    type="text"
                                    id="organizationName"
                                    value={formFields.email}
                                    onChange={createChangeHandler("organizationName")}
                                />
                            </div>
                            <div>
                                <label htmlFor="location">Address</label>
                                <input
                                    type="text"
                                    id="location"
                                    value={formFields.email}
                                    onChange={createChangeHandler("location")}
                                />
                            </div>
                            <div>
                                <label htmlFor="spaceLeft">Maximum number of participants</label>
                                <input
                                    type="number"
                                    id="spaceLeft"
                                    value={formFields.email}
                                    onChange={createChangeHandler("spaceLeft")}
                                />
                            </div>
       
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={() => handleSubmit(formFields)} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddEventModal.propTypes = {
    prop: PropTypes
}

const mapStateToProps = null;


export default connect(mapStateToProps, {addNewEvent})(AddEventModal)
