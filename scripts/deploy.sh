#!/usr/bin/env bash
ssh -oStrictHostKeyChecking=no root@$PERSONAL_SITE_IP 'bash -s' < $(pwd)/scripts/redeploy.sh
