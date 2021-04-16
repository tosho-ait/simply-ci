const build = require("./process/build");
const consts = require("./process/consts");
const context = require("./process/context");

const args = require("./service/args");

const gitSpace = require("./space/gitSpace");
const steps = require("./space/steps");
const envs = require("./space/envs");

// const lExec = require("./service/lExec");
// const lFs = require("./service/lFs");
// const sshFs = require("./service/ssh");
// const sshExec = require("./service/sshExec");
// const cOut = require("./service/cOut");
//
// const ciFile = require("./app2/component/ciFile");
// const git = require("./app2/component/git");
//
// const docker = require("./app2/component/docker");


module.exports = () => build({
    services: {args, consts},
    space: {gitSpace, steps, envs},
    context
}).run();