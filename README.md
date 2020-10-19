# Rest-Client 
Python Flask version

This web based tool(rest-client) is making life easier by removing the task of installing plugins, and because of nested json objects can be sometimes difficult to read, objects can now be rendered on page.

do not use in production

[![Header](https://github.com/equal8888/Rest-Client/blob/master/restclient.jpeg "Header")]() 

### Installation

```sh
pip install Flask
pip install -U flask-cors
```

set file permissions
```sh
sudo chmod 755 app1.py
sudo chmod 755 -R static/
sudo chmod 755 -R templates/
```
### run it


```sh
python app1.py
```
URL (Replace 0.0.0.0 with the local IP-adress or hostname)
```sh
http://0.0.0.0:8888/
```

json data is saved on host directory "/" filename "data.txt"

### OPTIONAL 
set it as a self running service on system boot for Raspberry Pi 2 Model B (Debian/2015-09-24-raspbian-jessie)

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
