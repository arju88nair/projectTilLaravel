from flask import Response, request
from database.model import Like, Category, User, Post, Comment
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, InternalServerError, UpdatingItemError, ActionAlreadyDone,DeletingItemError,ItemNotExistsError,ItemAlreadyExistsError,UpdatingItemError
import bson
from datetime import datetime
from flask_jwt_extended import jwt_required,get_jwt_identity
from util.slugGenerator import generateSlug
import json



class LikeApi(Resource):
    """[Like actions]
    """       
    
    
    @jwt_required   
    def post(self):
        """[Like API]
        
        Raises:
            SchemaValidationError: [If there are validation error in the post data]
            ActionAlreadyDone: [If the like already happened]
            InternalServerError: [Error in insertion]
        
        Returns:
            [json] -- [Json object with message and status code]
        """    
        payload = request.get_json()
        
        # source validations
        if 'item_id' not in  payload and 'item' not in  payload:
            raise SchemaValidationError
             
        item_id=payload['item_id']
        item=payload['item']
        itemObj= ""
        try:
            if item is 'P':
                itemObj = Post
            elif item  is 'C':
                itemObj = Comment 
            user_id = get_jwt_identity()
            like=itemObj.objects.get(id=item_id,liked_by__ne=user_id).update(upsert=True,inc__like_count=1,push__liked_by=user_id)
            data =  json.dumps({'message':"Successfully liked",'status' : True})
            return Response(data, mimetype="application/json", status=200)
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except itemObj.DoesNotExist:
            raise ActionAlreadyDone
        except Exception as e:
            print(e)
            raise InternalServerError
        
        
      
        
        
class UnLikeApi(Resource):
    """[UnLike action]
    """       
    
    
    @jwt_required   
    def post(self):
        """[Like API]
        
        Raises:
            SchemaValidationError: [If there are validation error in the post data]
            ActionAlreadyDone: [If the like already happened]
            InternalServerError: [Error in insertion]
        
        Returns:
            [json] -- [Json object with message and status code]
        """    
        payload = request.get_json()
        
        # source validations
        if 'item_id' not in  payload and 'item' not in  payload:
            raise SchemaValidationError
             
        item_id=payload['item_id']
        item=payload['item']
        itemObj= ""
        try:
            if item is 'P':
                itemObj = Post
            elif item  is 'C':
                itemObj = Comment 
            user_id = get_jwt_identity()
            like=itemObj.objects.get(id=item_id,liked_by=user_id).update(upsert=True,dec__like_count=1,pull__liked_by=user_id)
            data =  json.dumps({'message':"Successfully unliked",'status' : True})
            return Response(data, mimetype="application/json", status=200)
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except itemObj.DoesNotExist:
            raise ActionAlreadyDone
        except Exception as e:
            print(e)
            raise InternalServerError
      
        
        
