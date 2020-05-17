#!/usr/bin/env python
from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import json
import base64

app = Flask(__name__)
basic_auth = BasicAuth(app)

# Main page
@app.route('/')
def static1():
    return render_template('jsonpagestatic.html')

@app.route('/json01', methods=['GET','POST'])
@basic_auth.required
def json01():
    if request.method == 'GET' and "application/json" in request.headers["Content-Type"]:
       with open('data.txt', 'r') as json_file:
           req_data = json.load(json_file)
       return req_data

    if request.method == "POST" and "application/json" in request.headers["Content-Type"]:
       req_data = request.get_json()
       with open('data.txt', 'w') as outfile:
           json.dump(req_data, outfile)
       return '{"data01": "ok"}'

if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
