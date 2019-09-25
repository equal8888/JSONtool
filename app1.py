#!/usr/bin/env python3
from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import base64

app = Flask(__name__)
basic_auth = BasicAuth(app)

@app.route('/')
def static1():
    return render_template('jsonpagestatic.html')

@app.route('/Gjson01', methods=['POST'])
@basic_auth.required
def Gjson01():
    req_data = request.get_json()
    BytestoString = req_data['data1'].encode('utf-8')
    EncodeBase64 = base64.b64encode(BytestoString)
    return EncodeBase64

# --- Memo ---

# --- From Base64 to Json
#    req_data = request.data
#    DecodedtoBytes = base64.b64decode(req_data)
#    BytestoString = DecodedtoBytes.decode("UTF-8")

#    return BytestoString


# --- From Json to Base64
#    req_data = request.get_json()
#    BytestoString = req_data['data1'].encode('utf-8')
#    EncodeBase64 = base64.b64encode(BytestoString)
#    return EncodeBase64


# --- Cheat Sheet

# Creating a string
# s = "Hello World!"

# Encoding the string into bytes
#b = s.encode("UTF-8")

# Base64 Encode the bytes
#e = base64.b64encode(b)

# Decoding the Base64 bytes to string
#s1 = e.decode("UTF-8")

# Printing Base64 encoded string
#print("Base64 Encoded:", s1)

# Encoding the Base64 encoded string into bytes
# b1 = s1.encode("UTF-8")

# Decoding the Base64 bytes
# d = base64.b64decode(b1)

# Decoding the bytes to string
#s2 = d.decode("UTF-8")
#print(s2)

# --- End


if __name__ == '__main__':
    app.config['BASIC_AUTH_USERNAME'] = 'admin'
    app.config['BASIC_AUTH_PASSWORD'] = 'admin'
    app.run(debug=True, port=8888, host='0.0.0.0')
