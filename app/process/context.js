module.exports = () => {

    let args, yaml, steps, envs;

    return {
        setArgs: (a) => {
            args = a;
        },

        setYaml: (a) => {
            yaml = a;
        },

        setSteps: (a) => {
            steps = a;
        },

        setEnvs: (a) => {
            envs = a;
        },

        isLocal: () => true,

        isGit: () => false,

        getWorkDir: () => "/workspace",

        getGitDir: () => "/gitspace",

    }
};

