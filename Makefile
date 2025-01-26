install:
	npm ci

node:
	bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint

# щаблон
# npm run lint
# npm run test
# npm run test:coverage

# install: deps-install
# 	npx simple-git-hooks

# run:
# 	bin/nodejs-package.js 10

# deps-install:
# 	npm ci --legacy-peer-deps

# deps-update:
# 	npx ncu -u

# test:
# 	npm test

# test-coverage:
# 	npm test -- --coverage --coverageProvider=v8

# lint:
# 	npx eslint .

# publish:
# 	npm publish

# .PHONY: test