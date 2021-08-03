#!/usr/bin/env bash

cd "$(dirname $0)/.."
umask 002

run() {
    echo
    echo "$@"
    $@ || exit $?
}

export NODE_ENV=production
run npm ci --ignore-scripts --no-optional
run npm run build
