#!/bin/bash
# export $(grep -v '^#' /vagrant/packages/back/src/config/development.env | xargs -0)
#TODO
cd /vagrant/provision
docker-compose -f docker-compose-dev.yml up -d mongo
sudo docker exec -it mongo mongo \
    -u root -p pass123 --quiet \
    --eval 'rs.initiate();rs.status()'
exit
echo bootstrapped..