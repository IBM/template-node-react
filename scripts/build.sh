#!/usr/bin/env bash

IMAGE_NAME="$1"
IMAGE_VER="$2"

if [[ -z "${IMAGE_NAME}" ]] || [[ -z "${IMAGE_VER}" ]]; then
   echo "Required input is missing"
   echo "Usage: build.sh IMAGE_NAME IMAGE_VER"
   exit 1
fi

echo "Building ${IMAGE_NAME}:${IMAGE_VER}"

docker build -t ${IMAGE_NAME}:${IMAGE_VER} .
