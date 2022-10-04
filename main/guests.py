
from mimetypes import init
import re
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
    entree = db.Column(db.String(20), unique=False, nullable=True)
    side = db.Column(db.String(20), unique=False, nullable=True)
    childfood = db.Column(db.String(20), unique=False, nullable=True)
    ischild = db.Column(db.Boolean(1), unique=False, nullable=False)

    def __repr__(self):
        return '{0} {1} {2}'.format(self.id, self.fname, self.lname)

@app.route('/', methods=['GET'])
def landing():
    users = User.query.all()
    return render_template('guests.html', users=users)

@app.route('/sorted', methods=['GET'])
def sorted():
    users = User.query.all()
    users.sort(key=lambda user : user.fname.lower())
    return render_template('guests.html', users=users)
