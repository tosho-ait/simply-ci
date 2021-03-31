#!/bin/bash

docker build -t simplyci .
docker run --rm -it -v /var/run/docker.sock:/var/run/docker.soc -v $(pwd):/workspace simplyci -s build