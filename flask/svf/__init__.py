from flask import Flask
from flask_mongoengine import MongoEngine
from .models import *  # noqa

db = MongoEngine()


def create_app(debug=False):
    app = Flask(__name__)
    app.config['MONGODB_SETTINGS'] = {
        'db': 'SVF',
    }
    db.init_app(app)

    from .svf import main
    app.register_blueprint(main, url_prefix='/personas')

    from .error import error
    app.register_blueprint(error, url_prefix='/error')
    return app
