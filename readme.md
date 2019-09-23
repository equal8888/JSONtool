# JSONTool... I guess 🤔

Again having hard time naming my projects. 😄

GUI to POST anything and see it as a auto formatted JSON && Json+Base64 file format. Also data can be previewed/seen on live-action inside the website 😊
<br>
<br>
data -->
<img src="https://drive.google.com/uc?id=1SQ9Lhi74T0qONWIKMvpx3MzFcCZnwNzC" width="auto" height="200"/>
video -->
<img src="https://drive.google.com/uc?id=1tFPw5kPryupFu2Lp5l8RdQNhjzS77-ki" width="auto" height="200"/>

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
URL (Replace 0.0.0.0 with the local IP-adress or hostname)
```sh
http://0.0.0.0:8888/
```

### Troubleshoot for json button
From the flask server file '/static/js/script02.js' && '/static/js/script03.js' search
```sh
:8888/${url}
```
and update the ip with local IP-adress or hostname (or just rename existing hostname to "virgocluster")

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

5 commands for the new process
```sh
sudo systemctl status flaskapp.service

sudo systemctl restart flaskapp.service

sudo systemctl start flaskapp.service

sudo systemctl stop flaskapp.service

```

```sh
sudo systemctl enable flaskapp.service
sudo systemctl disable flaskapp.service
```
