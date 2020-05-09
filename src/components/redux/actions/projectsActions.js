export const startGettingProjects = () => ({
    type: projectTypes.START_GETTING_PROJECTS
});

export const successGettingProjects = payload => ({
    type: projectTypes.SUCCESS_GETTING_PROJECTS,
    ...payload
});

export const errorGettingProjects = payload => ({
    type: projectTypes.ERROR_GETTING_PROJECTS,
    ...payload
});


// Project detail

export const startGettingProject = id => ({
    type: projectTypes.START_GETTING_PROJECT,
    id
});

export const successGettingProject = payload => ({
    type: projectTypes.SUCCESS_GETTING_PROJECT,
    ...payload
});

export const errorGettingProject = payload => ({
    type: projectTypes.ERROR_GETTING_PROJECT,
    ...payload
});

export const projectTypes = {
    START_GETTING_PROJECTS: "START_GETTING_PROJECTS",
    SUCCESS_GETTING_PROJECTS: "SUCCESS_GETTING_PROJECTS",
    ERROR_GETTING_PROJECTS: "ERROR_GETTING_PROJECTS",

    START_GETTING_PROJECT: "START_GETTING_PROJECT",
    SUCCESS_GETTING_PROJECT: "SUCCESS_GETTING_PROJECT",
    ERROR_GETTING_PROJECT: "ERROR_GETTING_PROJECT",
};
