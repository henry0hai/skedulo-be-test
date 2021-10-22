# !/bin/sh

set -ex

BUILD_SCRIPT="$PWD/scripts/build.sh"
RUN_SCRIPT="$PWD/scripts/run.sh"
VERIFY_SCRIPT="$PWD/scripts/verify-music.sh"

$BUILD_SCRIPT
$VERIFY_SCRIPT $RUN_SCRIPT
