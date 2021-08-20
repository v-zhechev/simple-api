# Simple backend API

## Prerequisites

1. OS: Mac, Linux(Ubuntu), WSL2(Ubuntu distribution)
2. Node.js version > 14
3. Npm version > 7.6.0
4. Docker version > 20
5. Docker-compose version > 1.28

## Starting app
1. Clone repo and cd into it

2. Run initial script to create all required stuff:

```bash
make prepare-env
```

3. Define the environmental variables in .env file.

4. Start dev server with following command:

```bash
make start-dev
```

Or use dockerized version of it on port 8081.