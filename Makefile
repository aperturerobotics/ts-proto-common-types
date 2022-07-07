# https://github.com/aperturerobotics/protobuf-project

PROTOWRAP=hack/bin/protowrap

export GO111MODULE=on
undefine GOARCH
undefine GOOS

all:

vendor:
	go mod vendor

$(PROTOWRAP):
	cd ./hack; \
	go build -v \
		-o ./bin/protowrap \
		github.com/square/goprotowrap/cmd/protowrap

node_modules:
	yarn install

.PHONY: gents
gents: $(PROTOWRAP) node_modules
	go mod vendor
	shopt -s globstar; \
	set -eo pipefail; \
	export PROJECT=$$(go list -m); \
	export PATH=$$(pwd)/hack/bin:$${PATH}; \
	mkdir -p $$(pwd)/vendor/$$(dirname $${PROJECT}); \
	rm $$(pwd)/vendor/$${PROJECT} || true; \
	ln -s $$(pwd) $$(pwd)/vendor/$${PROJECT} ; \
	$(PROTOWRAP) \
		-I $$(pwd)/vendor \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--ts_proto_out=$$(pwd)/vendor \
		--ts_proto_opt=esModuleInterop=true \
		--ts_proto_opt=fileSuffix=.pb \
		--ts_proto_opt=importSuffix=.js \
		--ts_proto_opt=forceLong=long \
		--ts_proto_opt=oneof=unions \
		--ts_proto_opt=outputServices=default,outputServices=generic-definitions \
		--ts_proto_opt=useDate=true \
		--ts_proto_opt=useAsyncIterable=true \
		--proto_path $$(pwd)/vendor \
		--print_structure \
		--only_specified_files \
		$$(\
			git \
				ls-files "*.proto" |\
				xargs printf -- \
				"$$(pwd)/vendor/$${PROJECT}/%s "); \
	go mod vendor

.PHONY: genproto
genproto: gents

.PHONY: gen
gen: genproto
