# Pythonflask with a custom website for RasperryPi

it's a good playground to try stuff 😊👌

### Installation

Install the dependencies

```sh
$ sudo pip install Flask
$ sudo pip install Flask-BasicAuth
```
### run it


```sh
$ sudo python app1.py
```
URL (Replace 0.0.0.0 with the RasperryPi's local IP-adress)
```sh
http://0.0.0.0:8888/
```

### Troubleshoot for json button
From the flask server file '/static/js/script.js' on ' function loadJSON(callback) { '
Update the ip with RasperryPi’s local IP-adress

###  set as a self running system service on system boot (Debian/2015-09-24-raspbian-jessie)
1 create new file
sudo nano /lib/systemd/system/flaskapp.service

[Unit]
Description=Custom FlaskApp Service
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/bin/python3 /share/app1.py
Restart=on-failure

[Install]
WantedBy=multi-user.target


2 set permissions for the new app and process
sudo chown pi /share/app1.py
sudo chmod +x /share/app1.py
sudo chmod 755 /lib/systemd/system/flaskapp.service


3 enable the the new process
sudo systemctl daemon-reload
sudo systemctl enable flaskapp.service
sudo systemctl daemon-reload


4 Reboot
sudo reboot

5 checkStatus of the new process
sudo systemctl status flaskapp.service
