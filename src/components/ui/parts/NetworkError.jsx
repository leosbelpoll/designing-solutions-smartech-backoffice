import React from "react";

export default function NetworkError() {
    return (
        <div className="alert alert-dismissible alert-warning text-center">
            <button type="button" className="close" data-dismiss="alert">
                &times;
            </button>
            <h4 className="alert-heading">Error!</h4>
            <p className="mb-0">The API is not responding</p>
        </div>
    );
}
