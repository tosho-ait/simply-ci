const fs = require('fs');

module.exports = ({services, space, context}) => {
    return {
        getFromGitSpace: (file) => fs.readFileSync(context.getGitDir() + file, 'utf8')
    }
};