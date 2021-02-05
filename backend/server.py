from flask import Flask, render_template,jsonify,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
data = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data/',methods=['POST'])
def getdata():
    js=request.json
    print('req',request)
    print("request.json :",js)
    data.append(js['post_text'])
    print(data)
    return {'msgs':data}
if __name__ == '__main__':
    app.run(host='127.0.0.1',port = 5000)