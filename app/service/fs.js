const fs = require('fs');

module.exports = {
    get: (build, file) => {
        if (build.isLocal() || build.isGit()) {
            return fs.readFileSync(build.getWorkDir() + file, 'utf8');
        }

    }
};