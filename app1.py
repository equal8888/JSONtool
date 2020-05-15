#!/usr/bin/env python
from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import base64

app = Flask(__name__)
basic_auth = BasicAuth(app)

# Main page
@app.route('/')
def static1():
    return render_template('jsonpagestatic.html')

# Received json value is send back to "visual preview"
@app.route('/json01', methods=['GET','PUT','POST'])
@basic_auth.required
def json01():
    if request.method == 'GET':
        return '{"a": "Hi, Get method"}'

    if request.method == 'PUT':
        req_data = request.get_json()
        return req_data

    if request.method == 'POST':
        req_data = request.get_json()
        return req_data


if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
