from PIL import Image
import pytesseract
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

class OCR(APIView) :
    def get(self, request) :
        filename = "eurotext.png"
        filepath= f"media/{filename}"
        image = Image.open(filepath)
        lang = "fra"
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