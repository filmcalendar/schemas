#!/usr/bin/env bash

rimraf dist
microbundle --target node --sourcemap false --format modern
