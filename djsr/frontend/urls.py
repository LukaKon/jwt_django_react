from django.contrib import admin
from django.urls import path,include,re_path
from .views import index

urlpatterns=[
    path('',index),
    re_path(r'^.*/$',index),
]