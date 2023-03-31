FROM node:19-alpine

RUN npm install --global pnpm

WORKDIR /usr/src/app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY build /usr/src/app
