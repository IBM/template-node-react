#!/usr/bin/env bash

IMAGE_ORG="$1"
IMAGE_NAME="$2"
IMAGE_VER="$3"
NOT_LATEST="$4"

if [[ -z "${IMAGE_ORG}" ]] || [[ -z "${IMAGE_NAME}" ]] || [[ -z "${IMAGE_VER}" ]]; then
   echo "Required input is missing"
   echo "Usage: publish.sh IMAGE_ORG IMAGE_NAME IMAGE_VER [NOT_LATEST]"
   exit 1
fi

echo "Tagging and pushing ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER}"

docker tag ${IMAGE_NAME}:${IMAGE_VER} ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER}
docker push ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER}

if [[ -z "${NOT_LATEST}" ]]; then
   echo "Tagging and pushing ${IMAGE_ORG}/${IMAGE_NAME}:${IMAGE_VER} as ${IMAGE_ORG}/${IMAGE_NAME}:latest"
   docker tag ${IMAGE_NAME}:${IMAGE_VER} ${IMAGE_ORG}/${IMAGE_NAME}:latest
   docker push ${IMAGE_ORG}/${IMAGE_NAME}:latest
fi

