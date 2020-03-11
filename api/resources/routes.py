from .post import PostsApi,PostApi
from .comments import CommentsApi
from .categories import CategoriesApi, CategoryApi
from .user import SignupApi, LoginApi, TokenApi, LogoutApi, LogoutRefreshAPI


def initialize_routes(api):
    api.add_resource(PostsApi, '/api/posts')
    api.add_resource(PostApi, '/api/post/<id>')
    
    api.add_resource(CategoriesApi, '/api/categories')
    api.add_resource(CategoryApi, '/api/category/<id>')
    
    api.add_resource(CommentsApi, '/api/comments')

    api.add_resource(SignupApi, '/api/auth/signup')
    api.add_resource(LoginApi, '/api/auth/login')
    api.add_resource(TokenApi, '/api/auth/refresh')
    api.add_resource(LogoutApi, '/api/auth/logout')
    api.add_resource(LogoutRefreshAPI, '/api/auth/revokerefresh')
