install:
	npm ci
	npm link
brain-games:
	node bin/games/brain-games.js
publish:
	npm publish --dry-run
lint: 
	npx eslint .