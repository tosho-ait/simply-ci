FROM docker:19

MAINTAINER todor.ait@gmail.com

# Install GIT
RUN apk add --no-cache git

RUN apk update

#Install compose
RUN apk add py-pip python3-dev libffi-dev openssl-dev gcc libc-dev make
RUN pip install docker-compose

#install node
RUN apk add nodejs npm

#Workdir
WORKDIR /usr/src/app

#Add the app
COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT [ "node", "index.js" ]
