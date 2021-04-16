const child_process = require("child_process");

module.exports = ({services, space, context}) => {
    return {
        runInWorkspace: (command) => {
            return new Promise((resolve, reject) => {

                child_process.exec(
                    command,
                    {cwd: context.getWorkDir()},
                    (error, stdout, stderr) => {
                        if (error || stderr) {
                            if (error) {
                                console.log(`${error.message}`);
                            } else {
                                console.log(`${stderr}`);
                            }
                            reject();
                        } else {
                            console.log(`${stdout}`);
                            resolve();
                        }
                    });

            })
        }
    }
};