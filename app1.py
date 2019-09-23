#!/usr/bin/env python3
from flask import Flask, request, render_template, json, g
#from flask_basicauth import BasicAuth
import base64
import os

app = Flask(__name__)

@app.route('/')
def static1():
    return render_template('jsonpagestatic.html')

@app.route('/Gjson01', methods=['POST'])
def Gjson01():
    req_data = request.get_json()
    language = req_data['data1'].encode('utf-8')
    base64_Get01 = base64.b64encode(language)
    return base64_Get01

@app.route('/Gjson03', methods=['GET'])
def Gjson03():
    os.system('sudo poweroff')
    return 'ok'

if __name__ == '__main__':
#    app.config['BASIC_AUTH_USERNAME'] = 'admin'
#    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
