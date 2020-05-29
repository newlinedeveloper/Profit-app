from flask import Flask, render_template, request, json



app = Flask(__name__)

@app.route('/entreprenuer',methods=['POST','GET'])
def respond():
	# user =  request.form['username']
	# email = request.form['email']
	# phone = request.form['phone']
	# password = request.form['password']
	# print(user+" : "+email+" : "+phone+" : "+password)
	return render_template('index.html')

@app.route('/response',methods=['POST','GET'])
def response_process():
	if request.method == 'POST':
		user =  request.form['username']
		email = request.form['email']
		phone = request.form['phone']
		password = request.form['password']
		print(user+" : "+email+" : "+phone+" : "+password)
		return jsonify({"username" : user, "email" : email, "phone": phone, "password": password })
	else:
		return "<h1>Response page</h1>"

@app.route('/profit')
def process():
	return "<h1>Profit page</h1>"



# A welcome message to test our server
@app.route('/')
def index():
    return "<h1 style='margin-right : 50% '>Welcome to our server !!</h1>"


