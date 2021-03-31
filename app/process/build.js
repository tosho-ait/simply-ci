/*
The context contains the following:

- input arguments
- simplyci file content
- build type (local or git)
- steps tree
- process logs

 */

let context = undefined;

module.exports = {

    ciFile: "simplyci.yml",

    start: () => context = {},

    setArgs: args => context = {...context, args},

    isLocal: () => true,

    isGit: () => false,

    getWorkDir: () => context.args.target + "/",

    end: () => {
    },

}

