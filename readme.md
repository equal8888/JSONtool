# TEXT TO JSON tool... I guess 🤔


what you can do is to type stuff and see it as a auto formatted json && Json+Base64 file format. Also can be previewed/seen on live-action inside the website with the help of pythonflask
<br>
<br>
html -->
<img src="https://drive.google.com/uc?id=1ItYCaQdHqfrqPeEN9-0cHpXtSsKFW0cL" width="auto" height="200"/>
embed video -->
<img src="https://drive.google.com/uc?id=1KeBkKpMKadvgnH7YJ8WLnykYr3kkbX8v" width="auto" height="200"/>
<br>
<br>
do not use in production


### Installation

Install flask and its BasicAuth module

```sh
pip install Flask
pip install Flask-BasicAuth
```
### run it


```sh
python app1.py
```
URL (Replace 0.0.0.0 with the local IP-adress or hostname)
```sh
http://0.0.0.0:8888/
```

###  set it as a self running service on system boot (Debian/2015-09-24-raspbian-jessie)

install to sd (replace "of=/dev/sdX" to proper location of sd)
```sh
dd bs=8M if=2015-09-24-raspbian-jessie.img of=/dev/sdX status=progress
```

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
sudo systemctl start flaskapp.service
```



4 Reboot
```sh
sudo reboot
```
