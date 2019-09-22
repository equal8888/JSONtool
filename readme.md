# JSON auto formatter + Preview (RaspberryPi)

Custom GUI to POST anything and see it as a auto formatted JSON && Json+Base64 file format. Also data can be previewed/seen on live-action inside the website 😊

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
URL (Replace 0.0.0.0 with the RasperryPi's local IP-adress or hostname)
```sh
http://0.0.0.0:8888/
```

### Troubleshoot for json button
From the flask server file '/static/js/script02.js' && '/static/js/script03.js' search
```sh
function loadJSON(callback) {
```
and update the ip with RasperryPi’s local IP-adress or hostname

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
ExecStart=/Path/To/File/app1.py
Restart=on-failure

[Install]
WantedBy=multi-user.target
```


2 set permissions for the new app and process
```sh
sudo chown pi /Path/To/File/app1.py
sudo chmod +x /Path/To/File/app1.py
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
