from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from authentication import views

urlpatterns=[
    path('hello/',views.HelloWorldView.as_view(),name='hello_world',),
    path('user/create/',views.CustomUserCreate.as_view(),name='create_user'),
    path('token/obtain/',views.ObtainTokenPairWithColorView.as_view(),name='token_create',),
    path('token/refresh/',jwt_views.TokenRefreshView.as_view(),name='token_refresh',),
    path('blacklist/',views.LogoutAndBlacklistRefreshTokenForUserView.as_view(),name='blacklist',),
]