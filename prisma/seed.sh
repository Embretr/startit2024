#!/bin/bash

# -e Exit immediately when a command returns a non-zero status.
# -x Print commands before they are executed
set -ex

# Define the connection URL and the path to your SQL file
DATABASE_URL="postgresql://usr:pw@localhost:5433/db"
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Use psql to run the SQL file using the connection URL
psql "$DATABASE_URL" -f "$SCRIPT_DIR/scripts/create_tables.sql"
psql "$DATABASE_URL" -f "$SCRIPT_DIR/scripts/fakturaoversikt.sql"
psql "$DATABASE_URL" -f "$SCRIPT_DIR/scripts/saldobalanse.sql"
psql "$DATABASE_URL" -f "$SCRIPT_DIR/scripts/timestatistikk.sql"