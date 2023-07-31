from django.urls import path
from .views import *

# from .views import get_board_all
urlpatterns = [
    # path('', get_board_all),
    # 매칭되는 메소드들을 불러올 수 있음
    path('', Boards.as_view()),
    path('board/<int:pk>', BoardDetail.as_view()),
]