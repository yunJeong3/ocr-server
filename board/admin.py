from django.contrib import admin
from .models import Board
@admin.register(Board)
class MakeBoard(admin.ModelAdmin) :
    list_display = [
        'post_no',
        'title',
        'username'

    ]