# !/bin/sh

set -ex

## Run with multiple file in folder
# FILE_DIR_PATH=$1
# yarn && yarn play --dirName=$FILE_DIR_PATH

FILE_PATH=$1

node dist/server/playground/index.js --filePath=$FILE_PATH