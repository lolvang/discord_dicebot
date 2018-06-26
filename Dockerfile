FROM node:10.1-alpine
RUN apk update && \
    apk upgrade && \
    apk add git
RUN mkdir /opt/dicebot
WORKDIR /opt/dicebot
ADD dist/* ./
ADD package.json .
ADD auth.json .
RUN npm install --production
CMD ["node", "bot.js"]