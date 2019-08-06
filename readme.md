# Pythonflask with a custom website for RasperryPi

Only experimenting

### Installation

Install flask and its BasicAuth module

```sh
sudo pip install Flask
sudo pip install Flask-BasicAuth
```
### run it


```sh
sudo python app1.py
```
URL (Replace 0.0.0.0 with the RasperryPi's local IP-adress)
```sh
http://0.0.0.0:8888/
```

### Troubleshoot for json button
From the flask server file '/static/js/script.js' search
```sh
function loadJSON(callback) {
```
and update the ip with RasperryPi’s local IP-adress

###  set it as a self running service on system boot (Debian/2015-09-24-raspbian-jessie)
1 create new file
```sh
sudo nano /lib/systemd/system/flaskapp.service
```
add the following data to file flaskapp.service
```sh
[Unit]
Description=Custom FlaskApp Service
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/bin/python3 /share/app1.py
Restart=on-failure

[Install]
WantedBy=multi-user.target
```


2 set permissions for the new app and process
```sh
sudo chown pi /share/app1.py
sudo chmod +x /share/app1.py
sudo chmod 755 /lib/systemd/system/flaskapp.service
```

3 enable the the new process
```sh
sudo systemctl daemon-reload
sudo systemctl enable flaskapp.service
sudo systemctl daemon-reload
```



4 Reboot
```sh
sudo reboot
```

5 checkStatus of the new process
```sh
sudo systemctl status flaskapp.service
```
