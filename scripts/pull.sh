#!/usr/bin/env bash

IMAGE_ORG="$1"
IMAGE_NAME="$2"
IMAGE_VER="$3"

if [[ -z "${IMAGE_ORG}" ]] || [[ -z "${IMAGE_NAME}" ]] || [[ -z "${IMAGE_VER}" ]]; then
   echo "Required input is missing"
   echo "Usage: publish.sh IMAGE_ORG IMAGE_NAME IMAGE_VER [NOT_LATEST]"
   exit 1
fi

echo "Pulling and tagging ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER}"

docker pull ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER}
docker tag ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER} ${IMAGE_NAME}:${IMAGE_VER}
