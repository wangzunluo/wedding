
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

@app.route('/')
def landing():
    return render_template('landing.html')


@app.route('/countdown')
def countdown():
    return render_template('countdown.html')

@app.route('/rsvp')
def rsvp():
    return render_template('rsvp.html')
