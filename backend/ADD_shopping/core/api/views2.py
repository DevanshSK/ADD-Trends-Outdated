# from django.shortcuts import render
from rest_framework import viewsets
# from rest_framework.views import APIView
# from rest_framework import generics 
from .serializer import ProductSerializer
from core.models import Product
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

class Productview(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    def get_queryset(self):
        productlist = Product.objects.all()
        return productlist
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'brand', 'item', 'date_created']

    # queryset = Product.objects.all()
