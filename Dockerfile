FROM node:9.4.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
RUN mkdir -p /application

COPY . /application

WORKDIR /application

# Install `serve` to run the application.
RUN npm install -g serve

RUN npm install

# Build for production.
RUN npm run build --production

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 5000