from django.db import models

class Board(models.Model) :
    post_no = models.AutoField(primary_key=True, auto_created=1000)
    title = models.CharField(max_length=30, null=None)
    content = models.TextField(null=True, blank=True)
    username = models.ForeignKey("users.User", on_delete=models.SET_NULL, null=True)
    file = models.FileField(upload_to='', storage=None, max_length=100, null=True, blank=True)
    image_link = models.URLField(default='', blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modefied_at = models.DateTimeField(auto_now=True)