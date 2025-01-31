install:
	npm ci

gendiff:
	gendiff -h

test:
	npx jest --watch

test-coverage:
	npx jest --coverage

lint:
	npx eslint .

publish:
	npm publish --dry-run

# npm install -g jest
# npm run lint
# npm run test:coverage
# npm run test  --watch