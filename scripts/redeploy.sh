#!/usr/bin/env bash
docker pull evanfrawley/personalsite
docker rm -f personalsite
docker run -d \
-p 443:443 -p 80:80 \
-v /etc/letsencrypt:/etc/letsencrypt:ro \
--name personalsite \
evanfrawley/personalsite
