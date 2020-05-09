import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import URLMapping from "utils/routes";
import { startGettingProject } from "components/redux/actions/projectsActions";
import Error from "components/ui/pages/Error";
import Title from "components/ui/parts/Title";
import Table from "components/ui/parts/Table";

function ProjectDetail(props) {
    const { project, loading, error, getProject } = props;
    const { id } = useParams();

    useEffect(() => {
        getProject(id);
    }, [id, getProject]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Project detail" backUrl={URLMapping.PROJECTS} loading={loading} />
            <Table
                content={project}
                onlyColumns={[
                    {
                        name: "name"
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
    project: state.projectsReducer.project || {},
    error: state.projectsReducer.error,
    loading: state.projectsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getProject: id => dispatch(startGettingProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
