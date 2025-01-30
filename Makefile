install:
	npm ci
	npm install -g jest

gendiff:
	gendiff -h

test:
	npx jest
# npm run test  --watch

test-coverage:
	npx jest --coverage
# npm run test:coverage

lint:
	npx lint
# npm run lint

publish:
	npm publish --dry-run