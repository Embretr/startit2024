# Clean all, start db and run project
.PHONY: fresh
fresh:
	make dev

.PHONY: db
db:
	make purge
	docker compose up -d
	make wait-for-db
	make loaddata

# Clean everything
.PHONY: purge
purge:
	docker compose down
	docker volume rm startit2024_db_data -f
	docker container rm start_db -f

# Migrate prisma and run project
.PHONY: start
dev:
	pnpn install
	pnpm run dev

# Migrate in data
.PHONY: loaddata
loaddata:
	npx prisma migrate reset
	pnpm install

.PHONY: wait-for-db
wait-for-db:
	echo "Waiting for the database to be ready..."
	@while ! pg_isready -h localhost -p 5432 -U usr; do \
		sleep 1; \
		echo "Waiting for database..."; \
	done
	@echo "Database is ready!"
