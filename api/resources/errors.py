from flask_restful import HTTPException


class InternalServerError(HTTPException):
    pass


class SchemaValidationError(HTTPException):
    pass


class PostAlreadyExistsError(HTTPException):
    pass


class UpdatingPostError(HTTPException):
    pass


class DeletingPostError(HTTPException):
    pass


class PostNotExistsError(HTTPException):
    pass


class CategoryAlreadyExistsError(HTTPException):
    pass


class UpdatingCategoryError(HTTPException):
    pass


class DeletingCategoryError(HTTPException):
    pass


class CategoryNotExistsError(HTTPException):
    pass

class EmailAlreadyExistsError(HTTPException):
    pass


class UnauthorizedError(HTTPException):
    pass


class EmailAlreadyExistsError(HTTPException):
    pass


class UnauthorizedError(HTTPException):
    pass


class EmailDoesnotExistsError(HTTPException):
    pass


class BadTokenError(HTTPException):
    pass


class TokenNotFound(HTTPException):
    pass


class EntryDoesnotExistsError(HTTPException):
    pass


errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
    "SchemaValidationError": {
        "message": "Request is missing required fields",
        "status": 400
    },
    "PostAlreadyExistsError": {
        "message": "Post with given name already exists",
        "status": 400
    },
    "UpdatingPostError": {
        "message": "Updating post added by other is forbidden",
        "status": 403
    },
    "DeletingPostError": {
        "message": "Deleting post added by other is forbidden",
        "status": 403
    },
    "PostNotExistsError": {
        "message": "Post with given id doesn't exists",
        "status": 400
    },
    "CategoryNotExistsError": {
        "message": "Category with given id doesn't exists",
        "status": 400
    },
    "CategoryAlreadyExistsError": {
        "message": "Category with given name already exists",
        "status": 400
    },
    "UpdatingCategoryError": {
        "message": "Updating Category added by other is forbidden",
        "status": 403
    },
    "DeletingCategoryError": {
        "message": "Deleting Category added by other is forbidden",
        "status": 403
    },
    "EmailAlreadyExistsError": {
        "message": "User with given email address already exists",
        "status": 400
    },
    "UnauthorizedError": {
        "message": "Invalid username or password",
        "status": 401
    },
    "EmailDoesnotExistsError": {
        "message": "Couldn't find the user with given email address",
        "status": 400
    },
    "BadTokenError": {
        "message": "Invalid token",
        "status": 403
    },
    "TokenNotFound": {
        "message": "Token cannot be found",
        "status": 403
    },
    "EntryDoesnotExistsError": {
        "message": "Entry cannot be found",
        "status": 403
    }
}
