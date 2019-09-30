#!/usr/bin/env python3
from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import base64

app = Flask(__name__)
basic_auth = BasicAuth(app)

# Main page
@app.route('/')
def static1():
    return render_template('jsonpagestatic.html')

# Received jdata is converted to base64 and send back to sender
@app.route('/Gjson01', methods=['POST'])
@basic_auth.required
def Gjson01():
    req_data = request.get_json()
    BytestoString = req_data['jdata'].encode('utf-8')
    EncodeBase64 = base64.b64encode(BytestoString)
    return EncodeBase64

if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
