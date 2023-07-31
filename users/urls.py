from django.urls import path, include
from .views import *

urlpatterns = [
    path('', Users.as_view()),
    path('user/<int:pk>', UserDetail.as_view()),
    path('list', UserList.as_view()),
    path('login', Login.as_view()),
    # path('login', include('login_form.html')),
    path('logout', Logout.as_view()),
    # path('join', )
]