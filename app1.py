#!/usr/bin/env python
from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import json

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
       filehandler = open('data.txt', 'r')
       if filehandler.mode == 'r':
           contents = filehandler.read()

       response = app.response_class(
       response=contents,
       mimetype='application/json'
       )

       return response

    if request.method == "POST" and "application/json" in request.headers["Content-Type"]:
       req_data = request.get_json()
       with open('data.txt', 'w') as blah:
           json.dump(req_data, blah)

       response = app.response_class(
       response='{"data01": "ok"}',
       mimetype='application/json'
       )

       return response

if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
