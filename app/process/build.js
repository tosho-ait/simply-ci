module.exports = init => {

    let {services, space, context} = init;

    return {
        run: () => {

            // read args
            let args = services.args({services, space, context}).getArgs();
            context(init).setArgs(args);

            // read ciFile
            let yaml = space.gitSpace({services, space, context}).loadYaml();
            context(init).setYaml(yaml);

            // sort steps tree
            let steps = space.steps({services, space, context}).getSteps(yaml);
            context(init).setSteps(steps);

            // init envs
            let envs = space.envs({services, space, context}).getEnvs(yaml);
            context(init).setEnvs(envs);

            // start steps loop
            // - process args
            // - exec step (git, script, docker, docker-compose, artifacts)

            // store result to git if needed

        }
    }
};