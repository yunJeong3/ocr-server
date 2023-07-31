from PIL import Image
import pytesseract
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

import urllib.request
from io import BytesIO
import ssl

class OCR(APIView) :
    def get(self, request) :
        # filename = "eurotext.png"
        # filepath= f"media/{filename}"
        # image = Image.open(filepath)
        # lang = "fra"
        # result = pytesseract.image_to_string(image, lang)
        # return Response({
        #     'result' : result
        # })

        file = "https://ucarecdn.com/8d4ca21b-a145-4bc3-b939-0203dbf356c7/"
        
        ssl._create_default_https_context = ssl._create_unverified_context
        
        with urllib.request.urlopen(file) as url :
            image_bytes = BytesIO(url.read())

        image = Image.open(image_bytes)
        lang = 'eng+kor'
        result = pytesseract.image_to_string(image, lang)
        return Response({
            'result' : result
        })

    def post(self, request) :
        data = request.data
        image_link = data.get("image_link")
        lang = data.get("lang")

        ssl._create_default_https_context = ssl._create_unverified_context
        
        # print(image_link)
        with urllib.request.urlopen(image_link) as url :
            image_bytes = BytesIO(url.read())
        
        image = Image.open(image_bytes)
        result = pytesseract.image_to_string(image, lang)

        return Response({
            'result' : result
        })




def index(request) :
    return render(request, 'index.html')

def login(request):
    return render(request, 'login_form.html')

def board_write(request):
    return render(request, 'board_form.html')

def board(request, pk):
    return render(request, 'board.html')

def join(request):
    return render(request, 'join_form.html')

def user_update(request):
    return render(request, 'user_update_form.html')

def board_update(request):
    return render(request, 'board_update_form.html')

def board_list(request):
    return render(request, 'board_list_form.html')