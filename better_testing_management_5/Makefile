#value
DOCKER_COMPOSE=docker-compose
NPM_RUN=npm run

#make start
start:
	$(DOCKER_COMPOSE) up -d --build

#make stop
stop:
	$(DOCKER_COMPOSE) stop

#make down
down:
	$(DOCKER_COMPOSE) down

#make ps
ps:
	$(DOCKER_COMPOSE) ps

#caution be sure to have launch docker and docker compose up
#make test
test:
	$(NPM_RUN) test:webdriver