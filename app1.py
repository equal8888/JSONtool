from flask import Flask, request, render_template
from flask_basicauth import BasicAuth
import base64

app = Flask(__name__)

app.config['BASIC_AUTH_USERNAME'] = 'admin'
app.config['BASIC_AUTH_PASSWORD'] = 'admin'

basic_auth = BasicAuth(app)

database = {
    0: 'build the codez',
    1: '<iframe width="100%" height="415" src="https://www.youtube.com/embed/HqrfDNHnevU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/anotherpage',methods=['POST'])
def anotherpage():
    return render_template('anotherpage.html')

@app.route('/json', methods=['GET'])
#@basic_auth.required
def json():
   ReturnDB = database[1].encode('utf-8')
   base64_Get = base64.b64encode(ReturnDB)
   return base64_Get
 #  return ReturnDB

if __name__ == '__main__':
    app.run(debug=True, port=8888, host='0.0.0.0')
