#!/bin/bash

# -e Exit immediately when a command returns a non-zero status.
# -x Print commands before they are executed
set -ex

# Define the connection URL and the path to your SQL file
DATABASE_URL="postgresql://usr:pw@167.71.8.39:5432/db"
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

# Use psql to run the SQL file using the connection URL
psql -f "$SCRIPT_DIR/scripts/create_tables.sql" "$DATABASE_URL" 
psql -f "$SCRIPT_DIR/scripts/fakturaoversikt.sql" "$DATABASE_URL" 
psql -f "$SCRIPT_DIR/scripts/saldobalanse.sql" "$DATABASE_URL" 
psql -f "$SCRIPT_DIR/scripts/timestatistikk.sql" "$DATABASE_URL" 