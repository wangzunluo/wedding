
from flask import Flask, redirect, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
import os
import sys


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
    if request.method == 'GET':
        return render_template('rsvp.html')
    elif request.method == 'POST':
        num = request.form.get('people')
        return redirect(url_for('rsvp')+'/'+str(num))
    else:
        return render_template('error.html', method=request.method)


@app.route('/rsvp/<num>', methods=['GET', 'POST'])
def rsvp_num(num=None):
    if request.method == 'GET':
        return render_template('rsvp.html', num=int(num))
    elif request.method == 'POST':
        print(request.form, file=sys.stdout, flush=True)
        form = request.form
        fnames = form.getlist('fname')
        lnames = form.getlist('lname')
        email = form['email']
        phone = form.get('phone')
        foods = []
        for i in range(1,len(fnames)+1):
            foods.append(form['food'+str(i)])
        print(fnames, file=sys.stdout, flush=True)
        print(lnames, file=sys.stdout, flush=True)
        print(email, file=sys.stdout, flush=True)
        print(phone, file=sys.stdout, flush=True)
        print(foods, file=sys.stdout, flush=True)
        return render_template('success.html', name='generic')
    else:
        return render_template('error.html', method=request.method)