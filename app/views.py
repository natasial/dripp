from app import app
from flask import request
import json
import populateTables

@app.route('/')
@app.route('/index')
def index():
    return "Hello world"
    
@app.route('/matchInterest', methods=["GET"])
def doMatchInterest():
    interests = matchInterest(request.args['tags'])
    return json.dumps(interests)    
    
