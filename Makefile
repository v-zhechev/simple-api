install-dependencies:
	npm ci

build:
	npx tsc

start-dev:
	npx ts-node -T --project ./tsconfig.json src/index.ts 

start-prod: build
	node dist/index.js

build-image:
	docker build --pull --rm -f "Dockerfile" -t simpleapi:latest "." 

start-containers:
	docker-compose up -d

generate-keys:
	rm -rf keys
	mkdir keys
	ssh-keygen -t rsa -N '' -b 4096 -m PEM -f keys/accessSecret.key
	openssl rsa -in keys/accessSecret.key -pubout -outform PEM -out keys/accessSecret.key.pub

prepare-env: install-dependencies generate-keys build-image start-containers
	cp .env.example .env

lint:
	npx eslint --config .eslintrc.yml --ignore-path .eslintignore --cache "**/*.ts"