# simply-ci
simple and stateless CI


# GOALS

- stateless CI/CD without the need of a heavy automation server
- true everything-in-the-repo approach  
- can be run on a developer's station
- gives alternative to branch-centric ops 
- only docker!


# COMMAND LINE USAGE EXAMPLE

- build a local folder

docker run -v ./:/target -v docker/socket simlyci --watch --step deploy_local 

- build a remote git repo

docker run simlyci --target=https://git -e GIT_USER=user -e GIT_PASSWORD --step deploy_to_int




# YAML EXAMPLE

for:
	branches: # what branches does this config apply to
	storage:
		branch:
		disabled: 
	

variables: # declare variables here


pipelines: # declare your steps
	step: 
		name: # name of the step
		after: step_nmae # run this step after other step
		for:
			branches:
			variables:
			script:
		do:
			docker:
				dockerfile:
				image:
				composefile:
				build: true/false
				push: true/false
			script:
		artefacts;
			files:
			images:
		on:
			env name/ dind / host docker # where to run this step
		when: # manual/automatic
		extends:
		variables:
		
environments:
	env:
		name:
		connection:
			type:
			user:
			password:
			
	
