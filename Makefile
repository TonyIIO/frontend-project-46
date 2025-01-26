install:
	npm ci

node:
	bin/gendiff.js

test:
	npm run test

test-coverage:
	npm run test:coverage

lint:
	npm run lint

publish:
	npm publish --dry-run

# deps-install:
# 	npm ci --legacy-peer-deps

# deps-update:
# 	npx ncu -u