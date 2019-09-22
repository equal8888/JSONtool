#!/usr/bin/env python3
from flask import Flask, request, render_template, json, g #, url_for
from flask_basicauth import BasicAuth
import base64
import os

app = Flask(__name__)

basic_auth = BasicAuth(app)


@app.route('/')
def static1():
    return render_template('jsonpagestatic.html')

@app.route('/pi')
def pi():
    return render_template('pi.html')


@app.route('/Gjson01', methods=['GET','POST'])
def Gjson01():
   if request.method == 'GET':
       ReturnGJ01 = '<iframe width="100%" height="415" src="https://www.youtube.com/embed/pBuZEGYXA6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'.encode('utf-8')
       base64_Get01 = base64.b64encode(ReturnGJ01)
       return base64_Get01

   if request.method == 'POST':
        req_data = request.get_json()
        language = req_data['data1'].encode('utf-8')

        base64_Get01 = base64.b64encode(language)
        return base64_Get01


@app.route('/Gjson02', methods=['GET'])
@basic_auth.required
def Gjson02():
   os.system('sudo reboot')
   return 'ok'

@app.route('/Gjson03', methods=['GET'])
@basic_auth.required
def Gjson03():
   os.system('sudo poweroff')
   return 'ok'

@app.route('/Gjson04', methods=['GET'])
@basic_auth.required
def Gjson04():
   os.system('sudo systemctl daemon-reload')
   return 'ok'

@app.route('/Pjson01', methods=['POST'])
@basic_auth.required
def Pjson01():
    req_data = request.get_json()
    encoded = req_data['data1'].utf8
    data3 = base64.b64decode(encoded)
    return data3

if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
