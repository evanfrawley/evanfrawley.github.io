#!/usr/bin/env bash
docker push evanfrawley/personalsite
ssh -oStrictHostKeyChecking=no root@$PERSONAL_SITE_IP 'bash -s' < $(pwd)/scripts/redeploy.sh
