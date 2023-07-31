from rest_framework.serializers import ModelSerializer
from .models import Board
from users.serializers import UserOverviewSerializer

class BoardSerializer(ModelSerializer) :
    username = UserOverviewSerializer(read_only=True)
    class Meta :
        model = Board
        # 전체 출력
        fields = "__all__"

        # depth = 1 # foreign키의 object 도 들고옴

        # 원하는 요소만
        # fields = [
        #     "title",
        #     "content",
        #     "username",
        # ]
        
        # modefied_at 제외하고 출력
        # exclude = [
        #     "modefied_at",
        # ]