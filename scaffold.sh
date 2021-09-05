#!/bin/bash
# This script removes all the sample modules, components and services.

echo ">>> Starting scaffolding..."

echo "Removing sample modules files..."
rm -rf \
  src/app/detail \
  src/app/home \
  src/app/shared/components

echo "Removing sample assets..."
rm -rf \
  src/assets/*

echo "Clearing global styles..."
> src/styles/styles.scss

echo "Clearing module declarations, exports, imports..."
# src/app/app.module.ts
sed -i '32,38d' src/app/app.module.ts
sed -i '29,30d' src/app/app.module.ts
sed -i '26d' src/app/app.module.ts
sed -i '19,21d' src/app/app.module.ts
sed -i '10,16d' src/app/app.module.ts
sed -i '4d' src/app/app.module.ts
# src/app/app.component.ts
sed -i '18,28d' src/app/app.component.ts
sed -i '16d' src/app/app.component.ts
sed -i '3,4d' src/app/app.component.ts
# src/app/app-routing.module.ts
sed -i '23,24d' src/app/app-routing.module.ts
sed -i '9,17d' src/app/app-routing.module.ts
sed -i '3,6d' src/app/app-routing.module.ts
# src/app/shared/shared.module.ts
sed -i '15d' src/app/shared/shared.module.ts
sed -i '12d' src/app/shared/shared.module.ts
sed -i '9d' src/app/shared/shared.module.ts
sed -i '3,5d' src/app/shared/shared.module.ts

echo "Removing scaffold script..."
rm -rf scaffold.sh

echo ">>> Scaffolding finished successfully!"
