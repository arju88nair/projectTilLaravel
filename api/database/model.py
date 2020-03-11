from .db import db
import datetime
from flask_bcrypt import generate_password_hash, check_password_hash
from mongoengine.errors import FieldDoesNotExist, DoesNotExist
from resources.errors import TokenNotFound, InternalServerError



class Category(db.Document):
    title = db.StringField(required=True)
    symbol = db.StringField(required=True)
    description = db.StringField()
    is_admin = db.BooleanField(default = False)
    added_by = db.ReferenceField('User')
    creation_date = db.DateTimeField()
    modified_date = db.DateTimeField(default=datetime.datetime.now)
    
    def save(self, *args, **kwargs):
        if not self.creation_date:
            self.creation_date = datetime.datetime.now()
        self.modified_date = datetime.datetime.now()
        return super(Category, self).save(*args, **kwargs)

class Post(db.Document):
    title = db.StringField()
    source = db.StringField(required=True)
    source_url = db.URLField(required=True)
    summary = db.StringField()
    post_type = db.StringField()
    text = db.StringField()
    slug = db.StringField()
    type = db.StringField()
    category = db.ReferenceField('Category')
    keywords = db.ListField()
    tags = db.ListField()
    added_by = db.ReferenceField('User')
    creation_date = db.DateTimeField()
    modified_date = db.DateTimeField(default=datetime.datetime.now)
    
    def save(self, *args, **kwargs):
        if not self.creation_date:
            self.creation_date = datetime.datetime.now()
        self.modified_date = datetime.datetime.now()
        return super(Post, self).save(*args, **kwargs)
    
    
class User(db.Document):
    username = db.StringField()
    email = db.EmailField(required=True, unique=True)
    password = db.StringField(required=True, min_length=6)
    verified = db.BooleanField(default = False)
    is_active = db.BooleanField(default = True)
    posts = db.ListField(db.ReferenceField('Post', reverse_delete_rule=db.PULL))
    category = db.ListField(db.ReferenceField('Category', reverse_delete_rule=db.PULL))
    creation_date = db.DateTimeField()
    modified_date = db.DateTimeField(default=datetime.datetime.now)
    
    def save(self, *args, **kwargs):
        if not self.creation_date:
            self.creation_date = datetime.datetime.now()
        self.modified_date = datetime.datetime.now()
        return super(User, self).save(*args, **kwargs)

    def hash_password(self):
        self.password = generate_password_hash(self.password).decode('utf8')

    def check_password(self, password):
        return check_password_hash(self.password, password)

User.register_delete_rule(Post, 'added_by', db.CASCADE)
User.register_delete_rule(Category, 'added_by', db.PULL)


    
class RevokedTokenModel(db.Document):
    jti = db.StringField()
    token_type = db.StringField(null=False)
    user_identity = db.StringField(null=False)
    revoked = db.BooleanField(null=False)
    expires = db.DateTimeField()
    creation_date = db.DateTimeField(default=datetime.datetime.now)
    modified_date = db.DateTimeField(default=datetime.datetime.now)
    
    
    def save(self, *args, **kwargs):
        if not self.creation_date:
            self.creation_date = datetime.datetime.now()
        self.modified_date = datetime.datetime.now()
        return super(RevokedTokenModel, self).save(*args, **kwargs)


    @classmethod
    def is_jti_blacklisted(cls, jti):
        try:
            query = RevokedTokenModel.objects.get(jti =jti)
            return query.revoked
        except(DoesNotExist,FieldDoesNotExist):
            raise TokenNotFound
        except Exception as e:
            raise InternalServerError

class Comment(db.Document):
    post_id = db.ReferenceField('Post')
    slug = db.StringField()
    full_slug = db.StringField()
    comment= db.StringField()
    creation_date = db.DateTimeField(default=datetime.datetime.now)
    modified_date = db.DateTimeField(default=datetime.datetime.now)
    added_by = db.ReferenceField('User')
#    liked_by = db.ListField(db.ReferenceField('User'))
