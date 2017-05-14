from flask import Blueprint, render_template, request
from .models import Persona

main = Blueprint('main', __name__)


@main.route('/add', methods=['POST'])
def add():
    dataDict = request.json
    new_person = Persona(**dataDict)
    new_person.save()
    return new_person.to_json()


@main.route('/list', methods=['GET'])
def list_all():
    return Persona.objects.to_json()


@main.route('/')
def index():
    return render_template('index.html', personas=Persona.objects)
