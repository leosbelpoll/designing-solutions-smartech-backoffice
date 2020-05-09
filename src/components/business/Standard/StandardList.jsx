import React, { useEffect } from "react";
import { connect } from "react-redux";

import URLMapping from "utils/routes";
import { startGettingStandards } from "components/redux/actions/standardsActions";
import Error from "components/ui/pages/Error";
import Title from "components/ui/parts/Title";
import Table from "components/ui/parts/Table";

function StandardList(props) {
    const { standards, loading, error, getStandards } = props;

    useEffect(() => {
        getStandards();
    }, [getStandards]);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Title title="Standard list" loading={loading} />
            <Table
                type="crud"
                content={standards}
                onlyColumns={[
                    {
                        name: "name",
                        link: item => `${URLMapping.STANDARDS}/${item.id}`
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
    standards: state.standardsReducer.standards || [],
    error: state.standardsReducer.error,
    loading: state.standardsReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getStandards: () => dispatch(startGettingStandards())
});

export default connect(mapStateToProps, mapDispatchToProps)(StandardList);
