from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Hello world, welcome to your first view.")

def detail(request):
    return HttpResponse("Hello world, welcome to your detail.")