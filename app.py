import os
from flask import Flask, render_template


# create instance of Flask
app = Flask(__name__)


# index section
@app.route("/")
def index():
    """Render index template"""
    return render_template('index.html', title='Home')


# events
@app.route("/events")
def get_events():
    """Render events template"""
    return render_template('events.html', title='Events')


# wikipride
@app.route("/wikipride")
def wikipride():
    """Render wikipride template"""
    return render_template('wikipride.html', title='WikiPride')


# login section
@app.route("/login", methods=['GET', 'POST'])
def login():
    """Render login template"""
    return render_template('login.html', title='Login')


# @app.route('/logout')
# def logout():
#     """Clears session and redirects to home"""
#     session.clear()
#     return redirect(url_for('index'))

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    """Handles registration functionality"""
    return render_template('signup.html', title='SignUp')

if __name__ == "__main__":
    app.run(host=os.environ.get("IP", "0.0.0.0"),
            port=int(os.environ.get("PORT", "5000")),
            debug=True)
