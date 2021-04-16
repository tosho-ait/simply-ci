const yaml = require('js-yaml');

module.exports = () => {
    return {
        getFromGitSpace: (fileContents) => {

            let data = yaml.safeLoad(fileContents);

            console.log(data);

            return {}
        }
    }
};