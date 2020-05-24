from flask import Flask
from database.db import initialize_db
from flask_restful import Api
from resources.errors import errors
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from resources.routes import initialize_routes
from database.model import RevokedTokenModel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

JWT_SECRET_KEY = '0BC2zAA09nfH%%URaXh#N1a&71'
MONGODB_SETTINGS = {
    'host': 'mongodb://localhost/til'
}
api = Api(app, errors=errors)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']
    return RevokedTokenModel.is_jti_blacklisted(jti)

app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']


initialize_db(app)
initialize_routes(api)
app.debug = True
app.run(port=5000)