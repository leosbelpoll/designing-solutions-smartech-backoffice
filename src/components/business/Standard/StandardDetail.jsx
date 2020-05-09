import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import URLMapping from "utils/routes";
import { startGettingStandard } from "components/redux/actions/standardsActions";
import Error from "components/ui/pages/Error";
import Title from "components/ui/parts/Title";
import Table from "components/ui/parts/Table";

function StandardDetail(props) {
    const { standard, loading, error, getStandard } = props;
    const { id } = useParams();

    useEffect(() => {
        getStandard(id);
    }, [id, getStandard]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Standard detail" backUrl={URLMapping.STANDARDS} loading={loading} />
            <Table
                content={standard}
                onlyColumns={[
                    {
                        name: "name"
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
    standard: state.standardsReducer.standard || {},
    error: state.standardsReducer.error,
    loading: state.standardsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getStandard: id => dispatch(startGettingStandard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StandardDetail);
