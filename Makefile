# Clean all, start db and run project
.PHONY: fresh
fresh:
	make db
	make dev

.PHONY: db
db:
	make purge
	docker compose up -d
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
	pnpm run dev

# Migrate in data
.PHONY: loaddata
loaddata:
	npx prisma migrate reset
	pnpm install