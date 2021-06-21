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

# Single events pages.


@app.route("/bournemouth-pride")
def bournemouth_pride():
    """
    Single events page, directed here after clicking card on events.html.
    """
    return render_template('bournemouth-pride.html', title="Bournemouth pride 2021")


@app.route("/bristol-pride")
def bristol_pride():
    """
    Single events page, directed here after clicking card on events.html.
    """
    return render_template('bristol-pride.html', title="Bristol pride 2021")


@app.route("/lavender-walk")
def lavender_walk():
    """
    Single events page, directed here after clicking card on events.html.
    """
    return render_template('lavender-walk.html', title="Lavender Walk, Dublin 2021 ")


@app.route("/rotherham-pride")
def rotherham_pride():
    """
    Single events page, directed here after clicking card on events.html.
    """
    return render_template('rotherham.html', title="Rotherham Pride 2021")


@app.route("/llanelli-pride")
def llanelli_pride():
    """
    Single events page, directed here after clicking card on events.html.
    """
    return render_template('llanelli-pride.html', title="Llanelli Pride 2021")
# wikipride


@app.route("/wikipride")
def wikipride():
    """Render wikipride template"""
    return render_template('wikipride.html', title='WikiPride')


@app.route('/contact-us')
def contact_us():
    """contact us page"""
    return render_template('contact-us.html', title='Contact Us')


if __name__ == "__main__":
    app.run(host=os.environ.get("IP", "0.0.0.0"),
            port=int(os.environ.get("PORT", "5000")),
            debug=True)
