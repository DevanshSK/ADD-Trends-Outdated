from rest_framework import serializers
from core.models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'category',
            'image',
            'brand',
            'item_name',
            'original_mrp',
            'discounted_percent', 
            'status',
            'rating',
            'stock',
            'product_details',
            'date_created'
        ]

class multSerializer(serializers.Serializer):
    class Meta:
        model = mult_img
        fields = [
            'id',
            'brand',
            'image1',
            'image2',
            'image3',
            'image4',
            'image5',
        ]

class ctgSerializer(serializers.ModelSerializer):
    # prdt = ProductSerializer(many = True)
    class Meta:
        model = Category
        fields = [
            'category1',
            'category2',
            'category3',
            'category4',
            'category5',
            'category6',
        ]
# class cardsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = itemcard
#         fields =[
#             'id',
#             'pics',
#             'brand',
#             'original_mrp',
#             'discounted_mrp',
#             'rating'
#         ]