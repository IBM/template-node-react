# This imports the variables from horizon/hzn.json. You can ignore these lines, but do not remove them
-include horizon/hzn.json.tmp.IBMDEV

####################################################################################################
# Makefile Input Variables required for pipeline integration
#   IMG_REG_HOST
#   IMG_REG_USER 
#   IMG_REG_TOKEN
####################################################################################################


########################################################################################################
# Rule to build, push the image to the registry and publish the service def and deployment to EAM  
# Note that to actually deploy to the node, you must register the deployment policy to
# the node with the rule register-policy on the edge node where the agent runs.
########################################################################################################
build-and-publish: login build push publish-service publish-deployment-policy

####################################################################################################
# The "helper" utility is useful for things like this so I included it.
####################################################################################################
ARCH:=$(shell ./horizon/scripts/helper -a)
NODE:=$(shell ./horizon/scripts/helper -n)

####################################################################################################
# Project specific variables
####################################################################################################
IMG_REG_NAMESPACE:=dev
YOUR_SERVICE_NAME:=template-node-react
YOUR_SERVICE_VERSION:=1.0.0
DEPLOYMENT_POLICY:="${YOUR_SERVICE_NAME}-deployment-policy"

####################################################################################################
# Calculated Registry varilables based on Makefile input and Project specific vars
####################################################################################################
YOUR_IMAGE_REGISTRY:=${IMG_REG_HOST}/$(IMG_REG_NAMESPACE)
REGISTRY_USER_TOKEN:=$(YOUR_IMAGE_REGISTRY):${IMG_REG_USER}:${IMG_REG_TOKEN}

####################################################################################################
# Horizon json files
####################################################################################################
NODE_POLICY_FNAME:=horizon/node-policy.json
DEPLOYMENT_POLICY_FNAME:=horizon/deployment-policy.json
SERVICE_DEFINITION_FNAME:=horizon/service-definition.json

####################################################################################################
# Make file Rules
####################################################################################################

login:
		echo "${IMG_REG_TOKEN}" | docker login -u ${IMG_REG_USER} --password-stdin ${IMG_REG_HOST}

build:
		docker build -t $(YOUR_SERVICE_NAME):$(YOUR_SERVICE_VERSION) .

push:
		docker tag  $(YOUR_SERVICE_NAME):$(YOUR_SERVICE_VERSION) $(YOUR_IMAGE_REGISTRY)/$(YOUR_SERVICE_NAME):$(YOUR_SERVICE_VERSION)
		docker push $(YOUR_IMAGE_REGISTRY)/$(YOUR_SERVICE_NAME):$(YOUR_SERVICE_VERSION)

publish-service:
		ARCH=$(ARCH) \
        SERVICE_NAME="$(YOUR_SERVICE_NAME)" \
        SERVICE_VERSION="$(YOUR_SERVICE_VERSION)" \
    	hzn exchange service publish -I -O -r '$(REGISTRY_USER_TOKEN)' -f $(SERVICE_DEFINITION_FNAME)

publish-deployment-policy:
		ARCH=$(ARCH) \
        SERVICE_NAME="$(YOUR_SERVICE_NAME)" \
        SERVICE_VERSION="$(YOUR_SERVICE_VERSION)" \
		DOCKER_IMAGE_BASE="$(YOUR_IMAGE_REGISTRY)" \
        POLICY_NAME="$(DEPLOYMENT_POLICY)" \
        hzn exchange deployment addpolicy --json-file=$(DEPLOYMENT_POLICY_FNAME) --no-constraints "$(DEPLOYMENT_POLICY)"


# The following two actions require you to be on an agent installed device node
register-policy:
		echo "Registering Policy [$(NODE_POLICY_FNAME)] on Node [$(NODE)]."
		hzn register --policy "$(NODE_POLICY_FNAME)"

clean:  unregister-node remove-hub-data remove-reg-images

unregister-node: 
		hzn unregister -f; 

remove-hub-data:
		hzn exchange service removepolicy  -f "${HZN_ORG_ID}/$(YOUR_SERVICE_NAME)_$(YOUR_SERVICE_VERSION)_$(ARCH)" 
		hzn exchange service remove -f "${HZN_ORG_ID}/$(YOUR_SERVICE_NAME)_$(YOUR_SERVICE_VERSION)_$(ARCH)" 

remove-reg-images:
		docker rmi -f $(YOUR_IMAGE_REGISTRY)/$(YOUR_SERVICE_NAME):$(YOUR_SERVICE_VERSION)

# This imports the variables from horizon/hzn.cfg. You can ignore these lines, but do not remove them.
# horizon/hzn.json.tmp.IBMDEV:	horizon/hzn.json  @ hzn util configconv -f $< | sed 's/=/=/' > $@
