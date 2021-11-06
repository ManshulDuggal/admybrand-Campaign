FROM node:alpine as builder

RUN apk add --update --no-cache ca-certificates git 
RUN git config --global url."https://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:@github.com/".insteadOf "https://github.com/"
RUN git clone https://github.com/ad-my-brand/frontend-next.git
RUN npm install --global pm2
RUN cd frontend-next && yarn && yarn build
USER node
ENTRYPOINT ["yarn","dev"]

# generate clean, final image for end users
FROM alpine:latest
COPY --from=builder ./package*.json ./
COPY --from=builder ./.next ./

# executable
ENTRYPOINT ["pm2","start","yarn","--interpreter","bash","--","start"]
