FROM node

WORKDIR /app/src

COPY ./package.json .

RUN npm install --force

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]