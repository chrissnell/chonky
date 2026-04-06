PKG_DIR := packages/chonky-ui
DOCS_DIR := packages/docs
DOCS_DEST := /Volumes/NFS/static-sites/chrissnell.com/styles/chonky/docs
VERSION := $(shell node -p "require('./$(PKG_DIR)/package.json').version")

.PHONY: build docs patch minor release push

build:
	pnpm --filter chonky-ui build

docs:
	BASE_PATH=/styles/chonky/docs pnpm --filter chonky-docs build
	rsync -a --delete $(DOCS_DIR)/build/ $(DOCS_DEST)/
	@echo "Docs deployed to $(DOCS_DEST)"

patch:
	cd $(PKG_DIR) && npm version patch --no-git-tag-version
	@V=$$(node -p "require('./$(PKG_DIR)/package.json').version"); \
	git add $(PKG_DIR)/package.json; \
	git commit -m "v$$V"; \
	git tag "v$$V"; \
	echo "Tagged v$$V"

minor:
	cd $(PKG_DIR) && npm version minor --no-git-tag-version
	@V=$$(node -p "require('./$(PKG_DIR)/package.json').version"); \
	git add $(PKG_DIR)/package.json; \
	git commit -m "v$$V"; \
	git tag "v$$V"; \
	echo "Tagged v$$V"

release: build docs
	@echo "Built chonky-ui $(VERSION) and docs — ready to push"

push:
	git push origin main --tags
