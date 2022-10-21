from unicodedata import category
from django.contrib import admin
from core.models import *
# Register your models here.

admin.site.register(Product)
admin.site.register(Category)
# admin.site.register(contact_us)
admin.site.register(mult_img)