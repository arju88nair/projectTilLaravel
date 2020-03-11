from flask import Response, request
from database.model import Category, User
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, UpdatingCategoryError, CategoryAlreadyExistsError, InternalServerError,DeletingCategoryError,CategoryNotExistsError
from newspaper import Article   
import json
from flask_jwt_extended import jwt_required,get_jwt_identity


class CategoriesApi(Resource):
    """[Batch Category actions]
    """
    
    @jwt_required
    def get(self):
        """[Retrieves all Categories]
        
        Raises:
            InternalServerError: [If Eror in retrieval]
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            posts = Category.objects().to_json()
            data = {'data':json.loads(posts), 'message':"Successfully retreived", "count" : len(json.loads(posts))}
            data = json.dumps(data)
            response= Response(data, mimetype="application/json", status=200)
            return response
        except Exception as e:
            raise InternalServerError
        
    @jwt_required    
    def post(self):
        """[Batch Category API]
        
        Raises:
            SchemaValidationError: [If there are validation error in the category data]
            CategoryAlreadyExistsError: [If the category already exist]
            InternalServerError: [Error in insertion]
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            body = request.get_json()
            user_id = get_jwt_identity()
            user = User.objects.get(id=user_id)
            category =  Category(**body, added_by=user)
            category.save()
            id = category.id
            data =  json.dumps({'id': str(id),'message':"Successfully inserted"})
            return Response(data, mimetype="application/json", status=200)
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise CategoryAlreadyExistsError
        except Exception as e:
            print(e)
            raise InternalServerError




class CategoryApi(Resource):
    """[Individual Category actions]
    """
    @jwt_required
    def put(self, id):
        """[Updating single]
        
        Arguments:
            id {[Object ID]} -- [Mongo Object ID]
        
        Raises:
            SchemaValidationError: [If there are validation error in the category data]
            UpdatingCategoryError: [Error in update]
            InternalServerError: [Error in insertion]
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            user_id = get_jwt_identity()
            category = Category.objects.get(id=id, added_by=user_id)
            body = request.get_json()
            Category.objects.get(id=id).update(**body)
            data =  json.dumps({'message':"Successfully updated"})
            return Response(data, mimetype="application/json", status=200)
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingCategoryError
        except Exception:
            raise InternalServerError       
    
    @jwt_required
    def delete(self, id):
        """[Deleting single category]
        
        Arguments:
            id {[Object ID]} -- [Mongo Object ID]
        
        Raises:
            DeletingCategoryError: [Error in deletion]
            InternalServerError: [Error in insertion]    
                
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            category = Category.objects.get(id=id, added_by=user_id)
            category.delete()
            data =  json.dumps({'message':"Successfully deleted"})
            return Response(data, mimetype="application/json", status=200)
        except DoesNotExist:
            raise DeletingCategoryError
        except Exception:
            raise InternalServerError

    @jwt_required
    def get(self, id):
        """[Get single category item]
        
        Arguments:
            id {[Object ID]} -- [Mongo Object ID]
        
        Raises:
            CategoryNotExistsError: [Can't find the post item]
            InternalServerError: [Error in insertion]    
        
        Returns:
            [json] -- [Json object with message and status code]
        """
        try:
            posts = Category.objects.get(id=id).to_json()
            data =  json.dumps({'data':json.loads(posts), 'message':"Successfully retreived", "count" : len(json.loads(posts))})
            return Response(data, mimetype="application/json", status=200)
        except DoesNotExist:
            raise CategoryNotExistsError
        except Exception:
            raise InternalServerError