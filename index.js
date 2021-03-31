#!/usr/bin/env node

const exec = require("./app/service/exec");
const args = require("./app/service/args");
const build = require("./app/process/build");
const git = require("./app/service/git");
const fs = require("./app/service/fs");
const cifile = require("./app/service/cifile");

(async () => {

    build.start();

    build.setArgs(args.get());

    await exec.run({}, "pwd");
    await exec.run({}, "ls -al /workspace");

    if (!build.isLocal()) {
        git.clone(build);
    }

    let cifile = fs.get(build, build.ciFile);

    build.setCiProcess(cifile.parse(build, cifile));




    build.end();

    // await exec({}, "docker ps");

})();


