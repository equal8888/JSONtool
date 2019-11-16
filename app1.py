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
# I Decided to exclude the value for prettier outcome
@app.route('/Gjson01', methods=['POST'])
@basic_auth.required
def Gjson01():
    req_data = request.get_json()
    jvalue = req_data['data00'].encode('utf-8')
    return jvalue

if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
