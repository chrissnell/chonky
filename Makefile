PKG_DIR := packages/chonky-ui
VERSION := $(shell node -p "require('./$(PKG_DIR)/package.json').version")

.PHONY: build patch minor release push

build:
	pnpm --filter chonky-ui build

patch:
	cd $(PKG_DIR) && npm version patch --no-git-tag-version
	$(eval NEW_VERSION := $(shell node -p "require('./$(PKG_DIR)/package.json').version"))
	git add $(PKG_DIR)/package.json
	git commit -m "v$(NEW_VERSION)"
	git tag "v$(NEW_VERSION)"
	@echo "Tagged v$(NEW_VERSION)"

minor:
	cd $(PKG_DIR) && npm version minor --no-git-tag-version
	$(eval NEW_VERSION := $(shell node -p "require('./$(PKG_DIR)/package.json').version"))
	git add $(PKG_DIR)/package.json
	git commit -m "v$(NEW_VERSION)"
	git tag "v$(NEW_VERSION)"
	@echo "Tagged v$(NEW_VERSION)"

release: build
	@echo "Built chonky-ui $(VERSION) — ready to push"

push:
	git push origin main --tags
