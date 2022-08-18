
from mimetypes import init
from flask import Flask, redirect, render_template, request, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
import os
import sys


cwd = os.getcwd()
if '\\' in cwd:
    cwd = cwd.replace('\\', '/')[3:]

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+cwd+'/db/test.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(80), unique=False, nullable=False)
    lname = db.Column(db.String(80), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    phone = db.Column(db.String(20), unique=True, nullable=True)
    food = db.Column(db.String(20), unique=False, nullable=False)

    def __repr__(self):
        return '{0} {1}'.format(self.fname, self.lname)

@app.route('/', methods=['GET', 'POST'])
def landing():
    if request.method == 'POST':
        print('start', file=sys.stdout, flush=True)
        users = User.query.all()
        users.sort(reverse=True, key=lambda user : user.fname)
        print(users, file=sys.stdout, flush=True)
        print('done', file=sys.stdout, flush=True)
    return render_template('landing.html')


@app.route('/countdown')
def countdown():
    return render_template('landing.html', selected=0)

@app.route('/ourstory')
def story():
    return render_template('story.html')

@app.route('/guests')
def guests():
    users = User.query.all()
    users.sort(key=lambda user : user.fname.lower())
    return render_template('guests.html', users=users)

@app.route('/test')
def test():
    return render_template('test.html')


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
        form = request.form
        fnames = form.getlist('fname')
        lnames = form.getlist('lname')
        email = form['email']
        phone = form.get('phone')
        foods = []
        for i in range(1,len(fnames)+1):
            foods.append(form['food'+str(i)])

        
        person = User(fname=fnames[0], lname=lnames[0], food=foods[0], email=email)
        db.session.add(person)
        counter = 1
        while counter < len(fnames):
            person = User(fname=fnames[counter], lname=lnames[counter], food=foods[counter])
            db.session.add(person)
            counter += 1
        db.session.commit()
        return render_template('success.html', name=fnames[0])
    else:
        return render_template('error.html', method=request.method)