#!/bin/sh

cd ./wasm/rust
wasm-pack build --target web
cd ./pkg/

cat << EOF > .gitignore
!.gitignore
*
*/
!README.md
!package.json
EOF