
from flask import Flask, redirect, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
import os


cwd = os.getcwd().replace('\\', '/')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+cwd[3:]+'/db/test.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(80), unique=False, nullable=False)
    lname = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=True)
    food = db.Column(db.String(20), unique=False, nullable=False)


    def __repr__(self):
        return '{{0}} {{1}}'.format(self.fname, self.lname)

@app.route('/')
def landing():
    return render_template('landing.html')


@app.route('/countdown')
def countdown():
    return render_template('countdown.html')

@app.route('/rsvp', methods=['GET', 'POST'])
def rsvp():
    if request.method =='GET':
        print('test')
        return render_template('rsvp.html')
    elif request.method == 'POST':
        num = request.form['people']
        print(num)
        return redirect(url_for('rsvp')+'/'+str(num))

@app.route('/rsvp/<num>')
def rsvp_num(num=None):
    return render_template('rsvp.html', num=num)