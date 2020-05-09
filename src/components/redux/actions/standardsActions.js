export const startGettingStandards = () => ({
    type: standardTypes.START_GETTING_STANDARDS
});

export const successGettingStandards = payload => ({
    type: standardTypes.SUCCESS_GETTING_STANDARDS,
    ...payload
});

export const errorGettingStandards = payload => ({
    type: standardTypes.ERROR_GETTING_STANDARDS,
    ...payload
});


// Standard detail

export const startGettingStandard = id => ({
    type: standardTypes.START_GETTING_STANDARD,
    id
});

export const successGettingStandard = payload => ({
    type: standardTypes.SUCCESS_GETTING_STANDARD,
    ...payload
});

export const errorGettingStandard = payload => ({
    type: standardTypes.ERROR_GETTING_STANDARD,
    ...payload
});

export const standardTypes = {
    START_GETTING_STANDARDS: "START_GETTING_STANDARDS",
    SUCCESS_GETTING_STANDARDS: "SUCCESS_GETTING_STANDARDS",
    ERROR_GETTING_STANDARDS: "ERROR_GETTING_STANDARDS",

    START_GETTING_STANDARD: "START_GETTING_STANDARD",
    SUCCESS_GETTING_STANDARD: "SUCCESS_GETTING_STANDARD",
    ERROR_GETTING_STANDARD: "ERROR_GETTING_STANDARD",
};
