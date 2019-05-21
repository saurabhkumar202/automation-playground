FROM node:carbon
WORKDIR /usr/src/routing
COPY package*.json /usr/src/routing/
RUN npm install
COPY . /usr/src/routing
RUN node_modules/protractor/bin/webdriver-manager update
CMD node_modules/protractor/bin/protractor conf.js
EXPOSE 8090
