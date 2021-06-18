import os
from flask import Flask, render_template


# create instance of Flask
app = Flask(__name__)


# index section
@app.route("/")
def index():
    """Render index template"""
    return render_template('index.html', title='Home')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP", "0.0.0.0"),
            port=int(os.environ.get("PORT", "5000")),
            debug=True)
