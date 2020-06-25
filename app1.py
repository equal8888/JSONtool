#!/usr/bin/env python
from flask import Flask, request, render_template
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Main page
@app.route('/', methods=['GET'])
def static1():
    return render_template('jsonpagestatic.html')

@app.route('/json01', methods=['GET','POST'])
@basic_auth.required
def json01():
    if request.method == 'GET' and "Basic [YWRtaW46YWRtaW4=]" in request.headers["Authorization"] and "application/json" in request.headers["Content-Type"]:

       filehandlerR = open('/data.txt', 'r+')

       if filehandlerR.mode == 'r+':
           contents = filehandlerR.readlines()
           convertstr01 = ''.join(contents)
           filehandlerR.close()

# ----------------- generate response  -----------------
       response01 = app.response_class(
       response= convertstr01,
       mimetype='application/json',
       )

       return response01

    if request.method == 'POST' and "Basic [YWRtaW46YWRtaW4=]" in request.headers["Authorization"] and "application/json" in request.headers["Content-Type"]:

# ----------------- not sure about this -----------------
       req_data = request.get_json()                    #
       jsonstr = json.dumps(req_data)                   #
# -------------------------------------------------------

       filehandlerW = open('/data.txt', 'w+')

       if filehandlerW.mode == 'w+':
           filehandlerW.write(jsonstr)
           filehandlerW.close()

# ----------------- generate response  -----------------
       response02 = app.response_class(
       response='{"data01": "flask: ok"}'.encode('utf-8'),
       mimetype='application/json',
       )

       return response02

if __name__ == '__main__':
    app.run(debug=True, port=8888, host='0.0.0.0')
