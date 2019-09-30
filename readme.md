# JSONTool... I guess 🤔

Again having hard time naming my projects. 😄


what you can do is to type simple html and see it as a auto formatted JSON && Json+Base64 file format (the autoformatter is not trustworthy). Also can be previewed/seen on live-action inside the website with the help of pythonflask (Post method). please remember that POST is NOT idempotent method.
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

### Known issues

json is made for data interchange between computers. not to transfer html
<br>
the autoformatted json and json+base64 preview might not be reliable

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
