import React, { useEffect } from "react";
import { connect } from "react-redux";

import URLMapping from "utils/routes";
import { startGettingForms } from "components/redux/actions/formsActions";
import Error from "components/ui/pages/Error";
import Title from "components/ui/parts/Title";
import Table from "components/ui/parts/Table";
import { Link } from "react-router-dom";

function FormList(props) {
    const { forms, loading, error, getForms } = props;

    useEffect(() => {
        getForms();
    }, [getForms]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Form list" loading={loading} />
            <Link to={URLMapping.CREATE_FORM} className="btn btn-primary mb-3">Create</Link>
            <Table
                type="crud"
                content={forms.slice().reverse()}
                onlyColumns={[
                    {
                        name: "name",
                        link: item => `${URLMapping.FORMS}/${item.id}`
                    },
                    {
                        name: "description"
                    }
                ]}
            />
        </>
    );
}

const mapStateToProps = state => ({
    forms: state.formsReducer.forms || [],
    error: state.formsReducer.error,
    loading: state.formsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getForms: () => dispatch(startGettingForms())
});

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
