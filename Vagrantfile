# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network :private_network, ip: "10.10.10.61"
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.synced_folder "./", "/vagrant"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install docker
    sudo yes | apt install docker.io
    sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo usermod -aG docker $USER
    sudo chmod 666 /var/run/docker.sock
    docker-compose --version
  SHELL
  # config.vm.provision :shell, path: "./provision/bootstrap.sh"
  config.vm.provision :shell, inline: "cd /vagrant/provision && docker-compose up -d", run: "always"
end
