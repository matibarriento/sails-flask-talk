from flask_mongoengine import Document
from mongoengine import StringField


class Persona(Document):
    name = StringField()
    lastname = StringField()
