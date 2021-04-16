#!/usr/bin/env node

const app = require("./app/");

app();

//
// (async () => {
//
//     build.start();
//
//     build.setArgs(args.get());
//
//     await exec.run({}, "pwd");
//     await exec.run({}, "ls -al /workspace");
//
//     if (!build.isLocal()) {
//         git.clone(build);
//     }
//
//     let cifile = fs.get(build, build.ciFile);
//
//     build.setCiProcess(cifile.parse(build, cifile));
//
//
//
//
//     build.end();
//
//     // await exec({}, "docker ps");
//
// })();
//
//
