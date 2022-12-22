.SILENT:
.PHONY: android ios help

install: ## install js dependencies, and pod dependencies
	@yarn install
	@(cd ios && pod install)

reset: ## reset watchman, blast node_modules, clean yarn cache
	@watchman watch-del-all
	@rm -rf node_modules
	@yarn cache clean

start: ## start Metro
	@yarn react-native start --reset-cache

ios: ## run ios app
	@(cd ios && yarn react-native run-ios)

android: ## run android app
	@(cd android && yarn react-native run-android)

open-ios: ## open ios app
	@open ios/Example.xcodeproj

open-android: ## open android app
	@open -a /Applications/Android\ Studio.app ./android

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help