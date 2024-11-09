install:
	npm ci

node:
	bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint
