const yargs = require("yargs");

module.exports = () => {
    return {
        getArgs: () => yargs
            .usage('Usage: -n <name>')
            .option('w', {
                alias: 'watch',
                demandOption: false,
                default: false,
                describe: 'Watch for changes and rebuild.',
                type: 'boolean'
            })
            .option('s', {
                alias: 'step',
                demandOption: true,
                describe: 'Build step to run.',
                type: 'string'
            })
            .option('t', {
                alias: 'target',
                demandOption: false,
                default: '/workspace',
                describe: 'Target repository or folder to build.',
                type: 'string'
            })
            .option('e', {
                alias: 'env',
                demandOption: false,
                describe: 'Define build variable.',
                type: 'string'
            })
            .help()
            .argv
    }
};