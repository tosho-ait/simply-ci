const yaml = require('js-yaml');

module.exports = {
    parse: (build, cifile) => {

        let data = yaml.safeLoad(fileContents);

        console.log(data);

        return {}
    }
};