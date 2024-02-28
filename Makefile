# Clean all, start db and run project
.PHONY: fresh
fresh:
	make purge
	docker compose up -d
	make dev

# Clean everything
.PHONY: purge
purge:
	docker compose down
	docker volume rm startit2024_db_data -f
	docker container rm start_db -f

# Migrate prisma and run project
.PHONY: dev
dev:
	npx prisma migrate dev
	pnpm install
	pnpm run dev

# Migrate in data
.PHONY: loaddata
loaddata: