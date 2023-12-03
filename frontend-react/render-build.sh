#!/usr/bin/env bash

set -o errexit

npm install
npm update
npm run build