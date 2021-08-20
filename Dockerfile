FROM node:14.16.1-alpine3.13

RUN	apk	add \
		make \
		openssh \
		openssl

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN make install-dependencies
RUN make generate-keys
RUN make build

CMD [ "node", "dist/index.js" ]

EXPOSE 8080
