from flask import Flask, render_template, request, json



app = Flask(__name__)

@app.route('/entreprenuer/')
def respond():
    return render_template('index.html')



# A welcome message to test our server
@app.route('/')
def index():
    return "<h1 style='margin-right : 50% '>Welcome to our server !!</h1>"


