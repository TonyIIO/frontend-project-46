install:
	npm ci
	npm install -g jest

gendiff:
	gendiff -h

test:
	npm run test

test-coverage:
	npm run test:coverage

lint:
	npm run lint

publish:
	npm publish --dry-run