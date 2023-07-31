from django.urls import path
from .views import *

urlpatterns=[
    path('', index),
    path('login', login),
    path("board/write", board_write),
    path("board/<int:pk>", board),
    path('join', join),
    path('user_update', user_update),
    path('ocr', OCR.as_view()),
    path('board_update', board_update),
    path('board_list', board_list),
]   