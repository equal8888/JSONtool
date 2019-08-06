#!/usr/bin/env python
from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import base64

app = Flask(__name__)

app.config['BASIC_AUTH_USERNAME'] = 'admin'
app.config['BASIC_AUTH_PASSWORD'] = 'admin'

basic_auth = BasicAuth(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/jsonpage')
def jsonpage():
    return render_template('jsonpage.html')

@app.route('/Gjson01', methods=['GET'])
@basic_auth.required
def json():
   ReturnDB01 = '<iframe width="100%" height="415" src="https://www.youtube.com/embed/Gr79wGKE9sU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'.encode('utf-8')
   base64_Get01 = base64.b64encode(ReturnDB01)
   return base64_Get01

if __name__ == '__main__':
    app.run(debug=True, port=8888, host='0.0.0.0')
