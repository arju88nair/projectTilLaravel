from flask import Response, request
from database.model import Comments, Category, User
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, InternalServerError, UpdatingPostError, DeletingPostError,PostNotExistsError,PostAlreadyExistsError,UpdatingPostError
import bson
from datetime import datetime
from flask_jwt_extended import jwt_required,get_jwt_identity
from util.slugGenerator import generateSlug
import json



class CommentsApi(Resource):
    """[Batch Comment actions]
    """
    
    @jwt_required
    def get(self):
        """[Retrieves all Posts]
        
        Raises:
            InternalServerError: [If Eror in retrieval]
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            Comments = Comments.objects().to_json()
            data = {'data':json.loads(posts), 'message':"Successfully retreived", "count" : len(json.loads(Comments))}
            data = json.dumps(data)
            response= Response(data, mimetype="application/json", status=200)
            return response
        except Exception as e:
            raise InternalServerError
        
    
    
    @jwt_required   
    def post(self):
        """[Batch Comment API]
        
        Raises:
            SchemaValidationError: [If there are validation error in the post data]
            PostAlreadyExistsError: [If the post already exist]
            InternalServerError: [Error in insertion]
        
        Returns:
            [json] -- [Json object with message and status code]
        """    
        payload = request.get_json()
        
        # source validations
        if 'comment' not in  payload and 'post_id' not in  payload:
            raise SchemaValidationError
           
        body={}
        posted = datetime.utcnow()
        post_id=payload['post_id']
        parent_slug=""
        if 'slug_id'in payload:
            slug_id=payload['slug_id']
            parent = Comments.objects.get(slug=slug_id, post_id=post_id)
            parent_full_slug=parent['full_slug']
            parent_slug=parent['slug']
             
        # generate the unique portions of the slug and full_slug
        slug_part = generateSlug()
        full_slug_part = posted.strftime('%Y.%m.%d.%H.%M.%S') + ':' + slug_part
        # load the parent comment (if any)
        if parent_slug:
            slug = parent['slug'] + '/' + slug_part
            full_slug = parent['full_slug'] + '/' + full_slug_part
        else:
            slug = slug_part
            full_slug = full_slug_part
        user_id = get_jwt_identity()
        user = User.objects.get(id=user_id)
        body["added_by"]=user
        body["post_id"] = payload['post_id']
        body["slug"] =slug
        body["full_slug"] = full_slug
        body["comment"] = payload['comment']
        
        try:
            comment=Comments(**body)
            comment.save()  
            id = comment.id
            data =  json.dumps({'id': str(id),'message':"Successfully inserted"})
            return Response(data, mimetype="application/json", status=200)
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise PostAlreadyExistsError
        except Exception as e:
            print(e)
            raise InternalServerError
        
        
      
        
        
class PostApi(Resource):
    """[Individual Comment actions]
    """
    @jwt_required
    def put(self, id):
        """[Updating single]
        
        Arguments:
            id {[Object ID]} -- [Mongo Object ID]
        
        Raises:
            SchemaValidationError: [If there are validation error in the post data]
            UpdatingPostError: [Error in update]
            InternalServerError: [Error in insertion]
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            user_id = get_jwt_identity()
            post = Comments.objects.get(id=id, added_by=user_id)
            body = request.get_json()
            Comments.objects.get(id=id).update(**body)
            data =  json.dumps({'message':"Successfully updated"})
            return Response(data, mimetype="application/json", status=200)
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingPostError
        except Exception:
            raise InternalServerError       
    
    @jwt_required
    def delete(self, id):
        """[Deleting single post]
        
        Arguments:
            id {[Object ID]} -- [Mongo Object ID]
        
        Raises:
            DeletingPostError: [Error in deletion]
            InternalServerError: [Error in insertion]    
                
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            post = Post.objects.get(id=id, added_by=user_id)
            post.delete()
            data =  json.dumps({'message':"Successfully deleted"})
            return Response(data, mimetype="application/json", status=200)
        except DoesNotExist:
            raise DeletingPostError
        except Exception:
            raise InternalServerError

    @jwt_required
    def get(self, id):
        """[Get single post item]
        
        Arguments:
            id {[Object ID]} -- [Mongo Object ID]
        
        Raises:
            PostNotExistsError: [Can't find the post item]
            InternalServerError: [Error in insertion]    
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            posts = Post.objects.get(id=id).to_json()
            data =  json.dumps({'data':json.loads(posts), 'message':"Successfully retreived", "count" : len(json.loads(posts))})
            return Response(data, mimetype="application/json", status=200)
        except DoesNotExist:
            raise PostNotExistsError
        except Exception:
            raise InternalServerError
