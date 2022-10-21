# import graphene
# from graphene_django import DjangoObjectType
# from core.models import Product
  
# class Producttype(DjangoObjectType):
#     class Meta: 
#         model = Product
#         fields = (
#             'id',
#             'image',
#             'brand',
#             'item',
#             'mrp',
#             'discount', 
#             'status',
#             'product_details',
#             'style_note',
#             'date_created',
#             'slug'
#         )  


# class Query(graphene.ObjectType):
#     products = graphene.List(Producttype)

#     def resolve_products(root, info, **kwargs):
#         # Querying a list
#         return Product.objects.all()
        
# schema = graphene.Schema(query=Query)