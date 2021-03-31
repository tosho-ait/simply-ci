FROM ubuntu:18.04

MAINTAINER todor.ait@gmail.com

# TODO make better image, this is just a poc...

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update

# install docker
RUN apt -y install docker.io

# install git
RUN apt -y install git

# install node
RUN apt -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt -y install nodejs

# workdir
WORKDIR /usr/src/app

# add the app
COPY package*.json ./
RUN npm install
COPY ./ .

ENTRYPOINT [ "node", "index.js" ]
