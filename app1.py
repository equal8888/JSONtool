#!/usr/bin/env python3
from flask import Flask, request, render_template
import base64

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

if __name__ == '__main__':
    app.run(debug=True, port=8888, host='0.0.0.0')
