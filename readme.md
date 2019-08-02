# Testing Pythonflask with a custom website

Just a small playground to try stuff

### Installation

Install the dependencies

```sh
$ sudo pip install Flask
$ sudo pip install Flask-BasicAuth
```

and run the website....

```sh
$ sudo python app1.py
```

### Troubleshoot for json button
From the flask server file '/static/js/script.js' on ' function loadJSON(callback) { '
Update the ip with python flask server ip (local ip is sufficient)
