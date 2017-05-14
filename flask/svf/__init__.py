from flask import Flask
from flask_mongoengine import MongoEngine

db = MongoEngine()


def create_app():
    app = Flask(__name__)
    app.config['MONGODB_SETTINGS'] = {
        'db': 'SVF',
    }
    app.config['DEBUG'] = True

    from .svf import main
    app.register_blueprint(main, url_prefix='/personas')
    db.init_app(app)

    return app
