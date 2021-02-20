#!/usr/bin/env node

const yargs = require("yargs");

const argv = yargs
    .usage("Usage: -n <name>")
    .option('w', {
        alias: 'watch',
        demandOption: false,
        default: false,
        describe: 'Watch for changes and rebuild.',
        type: 'boolean'
    })
    .option('s', {
        alias: 'step',
        demandOption: false,
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
    .argv;

const greeting = `Hello!`;

console.log(greeting);
console.log(JSON.stringify(argv));

const { exec } = require("child_process");

exec("cd /workspace && ls -al && docker build -t simplyci .", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});




