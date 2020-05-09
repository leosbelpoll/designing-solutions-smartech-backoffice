import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import URLMapping from "utils/routes";
import Title from "components/ui/parts/Title";
import { startCreatingProjects } from "components/redux/actions/projectsActions";

function ProjectForm(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const COMPONENT = "project";
    const { createProject } = props;

    const onSubmit = (e) => {
        e.preventDefault();
        
        createProject({
            name,
            description
        });
    }

    return (
        <>
            {id ? <Title title={`Update ${COMPONENT}`} /> : <Title title={`Create ${COMPONENT}`} />}
            <form className="mt-4">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="description"
                        placeholder="Enter description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button onClick={onSubmit} className="btn btn-primary mb-4 mt-4">
                    Create {COMPONENT}
                </button>
                <Link to={URLMapping.PROJECTS} className="btn btn-outline-secondary mb-4 mt-4 ml-4">
                    Back to list
                </Link>
            </form>
        </>
    );
}

const mapStateToProps = state => ({
    formToUpdate: state.projectsReducer.formToUpdate,
    error: state.projectsReducer.error,
    loading: state.projectsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    createProject: data => dispatch(startCreatingProjects(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
