export const startGettingForms = () => ({
    type: formTypes.START_GETTING_FORMS
});

export const successGettingForms = payload => ({
    type: formTypes.SUCCESS_GETTING_FORMS,
    ...payload
});

export const errorGettingForms = payload => ({
    type: formTypes.ERROR_GETTING_FORMS,
    ...payload
});


// Form detail

export const startGettingForm = id => ({
    type: formTypes.START_GETTING_FORM,
    id
});

export const successGettingForm = payload => ({
    type: formTypes.SUCCESS_GETTING_FORM,
    ...payload
});

export const errorGettingForm = payload => ({
    type: formTypes.ERROR_GETTING_FORM,
    ...payload
});

export const formTypes = {
    START_GETTING_FORMS: "START_GETTING_FORMS",
    SUCCESS_GETTING_FORMS: "SUCCESS_GETTING_FORMS",
    ERROR_GETTING_FORMS: "ERROR_GETTING_FORMS",

    START_GETTING_FORM: "START_GETTING_FORM",
    SUCCESS_GETTING_FORM: "SUCCESS_GETTING_FORM",
    ERROR_GETTING_FORM: "ERROR_GETTING_FORM",
};
