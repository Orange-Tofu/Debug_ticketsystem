from flask import *
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')
app.secret_key = 'super secret key'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ticket_show.db'

db = SQLAlchemy(app)

class Admins(db.Model):
    admin_id = db.Column(db.Integer(), primary_key = True)
    password = db.Column(db.String(20), nullable = False)

    def __repr__(self):
        return "<Admin %r>" % self.admin_id

class Users(db.Model):
    user_id = db.Column(db.Integer(), primary_key = True)
    password = db.Column(db.String(20), nullable = False)
    usr_name = db.Column(db.String(30), nullable = False)

    def __repr__(self):
        return "<User %r>" % self.user_id

class Venues(db.Model):
    venue_id = db.Column(db.Integer(), primary_key = True)
    venue_name = db.Column(db.String(50), nullable = False)
    shows = db.relationship("Shows")

    def __repr__(self):
        return "<Venue %r>" % self.venue_id

class Shows(db.Model):
    show_id = db.Column(db.Integer(), primary_key = True)
    show_name = db.Column(db.String(50), nullable = False)
    show_time = db.Column(db.DateTime(), nullable = False)
    show_tag = db.Column(db.String(50), nullable = False)
    show_rating = db.Column(db.Integer(), nullable = False)
    show_price = db.Column(db.Integer(), nullable = False)
    svenue_id = db.Column(db.Integer(), db.ForeignKey('venues.venue_id'))

    def __repr__(self):
        return "<Shows %r>" % self.show_id

class Bookings(db.Model):
    booking_id = db.Column(db.Integer(), primary_key = True)
    buser_id = db.Column(db.Integer(), db.ForeignKey('users.user_id'))
    bvenue_id = db.Column(db.Integer(), db.ForeignKey('venues.venue_id'))
    bshow_id = db.Column(db.Integer(), db.ForeignKey('shows.show_id'))
    num_tickets = db.Column(db.Integer(), nullable = False)
    total_price = db.Column(db.Integer(), nullable = False)

    def __repr__(self):
        return "<Bookings %r%r%r>" % self.venue_id % self.show_id % self.booking_id




@app.route('/registeration', methods =["GET", "POST"])
def user_registeration():
    if request.method == 'POST' :
        user_name = request.form.get('username')
        user_password = request.form.get('userpassword')
        user_passwordconf = request.form.get('userpasswordconf')
        if user_password == user_passwordconf:
            reg = Users(password=user_password, usr_name=user_name)
            db.session.add(reg)
            db.session.commit()
            print(user_name, user_password)
            return "user registered"
    return render_template('registeration.html')



@app.route("/")
def index():
    return render_template("admin_login.html")

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(debug=True)
