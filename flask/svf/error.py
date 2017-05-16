from flask import Blueprint, render_template
from .models import Persona

error = Blueprint('error', __name__)


@error.route("/error")
def inspect():
    i, j = 1, 0
    return str(i / j)


@error.route("/debug")
def debug():
    try:
        import ipdb as pdb
    except ImportError:
        import pdb

    personas = Persona.objects
    pdb.set_trace()
    return render_template('index.html', personas=personas)
