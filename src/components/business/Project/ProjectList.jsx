import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import URLMapping from "utils/routes";
import { startGettingProjects } from "components/redux/actions/projectsActions";
import Error from "components/ui/pages/Error";
import Title from "components/ui/parts/Title";
import Table from "components/ui/parts/Table";

function ProjectList(props) {
    const { projects, loading, error, getProjects } = props;

    useEffect(() => {
        getProjects();
    }, [getProjects]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Project list" loading={loading} />
            <Link to={URLMapping.CREATE_PROJECT} className="btn btn-primary mb-3">Create</Link>
            <Table
                type="crud"
                content={projects}
                onlyColumns={[
                    {
                        name: "name",
                        link: item => `${URLMapping.PROJECTS}/${item.id}`
                    },
                    {
                        name: "lastName"
                    },
                    {
                        name: "projectname",
                        className: "bg-warning p-1 text-danger"
                    },
                    {
                        name: "lifeState"
                    }
                ]}
            />
        </>
    );
}

const mapStateToProps = state => ({
    projects: state.projectsReducer.projects || [],
    error: state.projectsReducer.error,
    loading: state.projectsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(startGettingProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
