# Rest-Client... I guess 🤔
<br>
this website based tool is making the life easier by removing the task of installing plugins, and because of nested json objects can be sometimes difficult to read.
<br>
<br>
<img src="https://drive.google.com/uc?id=1FGX_fxGTIWIf3lnlMd4TKh4LMXk1UkdY" width="auto"/>
<br>
<br>
do not use in production

### Installation

Install flask and its BasicAuth module

```sh
pip install Flask
pip install -U flask-cors
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


2 make it executable
```sh
sudo chmod u+x /Path/To/File/app1.py
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
