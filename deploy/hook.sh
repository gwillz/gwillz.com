#!/usr/bin/env bash

cd "$(dirname $0)/.."
umask 002

run() {
    echo
    echo "$@"
    $@ || exit $?
}

run npm ci --ignore-scripts --no-optional
export NODE_ENV=production
run npm run build
