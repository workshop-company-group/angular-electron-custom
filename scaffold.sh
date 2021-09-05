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
sed -i '34,40d' src/app/app.module.ts
sed -i '31,32d' src/app/app.module.ts
sed -i '28d' src/app/app.module.ts
sed -i '20,22d' src/app/app.module.ts
sed -i '11,17d' src/app/app.module.ts
sed -i '5d' src/app/app.module.ts
# src/app/app.component.ts
sed -i '18,28d' src/app/app.component.ts
sed -i '16d' src/app/app.component.ts
sed -i '3,4d' src/app/app.component.ts
# src/app/app-routing.module.ts
sed -i '23,24d' src/app/app-routing.module.ts
sed -i '9,17d' src/app/app-routing.module.ts
sed -i '3,6d' src/app/app-routing.module.ts
# src/app/shared/shared.module.ts
sed -i '19,20d' src/app/shared/shared.module.ts
sed -i '15,16d' src/app/shared/shared.module.ts
sed -i '11d' src/app/shared/shared.module.ts
sed -i '3,7d' src/app/shared/shared.module.ts

echo ">>> Scaffolding finished successfully!"
