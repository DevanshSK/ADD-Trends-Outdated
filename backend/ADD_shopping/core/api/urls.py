from django.urls import re_path, include
from rest_framework import routers
from core.api import views
from rest_framework.urlpatterns import format_suffix_patterns
# from .views import product_list

# router = routers.DefaultRouter()
router = routers.DefaultRouter()
router.register(r'products', views.Productlist, 'Product')
router.register(r'ctg', views.ctglist, 'Categories')
# router.register(r'Product', views.Productview, 'Product')

urlpatterns = [
    re_path('', include(router.urls)),
    # path('', views.Productlist, 'Product'),
    # path('products/', views.Productlist.as_view()),
    # path("", include('rest_framework.urls')),
]

# urlpatterns = format_suffix_patterns(urlpatterns)