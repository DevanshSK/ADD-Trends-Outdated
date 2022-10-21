from distutils.text_file import TextFile
from email.policy import default
from django.db import models
from django.db.models import Model
from phonenumber_field.modelfields import PhoneNumberField
# import cloudinary
# from cloudinary.models import CloudinaryField

CATEGORY_CHOICES = (
    ('Winter Wear', 'Winter Wear'),
    ('Summer Wear', 'Summer Wear'),
    ('Top wear', 'Top wear'),
    ('Bottom Wear', 'Bottom Wear'),
    ('Foot wear', 'Foot wear'),
    ('Null', 'Null'),
)

# Create your models here.


class Product(models.Model):
    category = models.CharField(
        choices=CATEGORY_CHOICES, max_length=200, null=True)
    # image = models.ForeignKey('mult_img',related_name = "photo",on_delete=models.CASCADE)
    image = models.ImageField(upload_to='items/', blank=True)
    # icon = CloudinaryField('image', null=True, blank=True)
    brand = models.CharField(max_length=150)
    item_name = models.TextField()
    original_mrp = models.IntegerField(null=True)
    discounted_percent = models.DecimalField(("discount  %"),
                                             max_digits=7,
                                             decimal_places=2,
                                             null=True)
    status = models.BooleanField()
    stock = models.IntegerField(null=True)
    rating = models.IntegerField(null=True)
    product_details = models.TextField(null=True)
    date_created = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ['-date_created']

    def __str__(self):
        return self.item_name

# class itemcard(models.Model):
#     # image = models.ForeignKey('pics',  on_delete=models.CASCADE)
#     pics = models.ImageField(upload_to='items/', blank = True)
#     brand = models.CharField(max_length=150)
#     original_mrp = models.DecimalField(
#         max_digits=7,
#         decimal_places=2,
#         null = True)
#     discounted_mrp = models.DecimalField(
#         max_digits=7,
#         decimal_places=2,
#         null = True)
#     rating = models.IntegerField(null = True)

    # def __str__(self) -> str:
    #     return self.brand

# class contact_us(models.Model):
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     email = models.EmailField(null= True)
#     phone = PhoneNumberField(region= 'IN')
#     desc = models.TextField(null=True)


'''
---------------------------for multiple images-----------------------------------'''


class mult_img(models.Model):
    brand = models.CharField(max_length=50, null=True)
    image1 = models.ImageField(upload_to='items/', blank=True)
    image2 = models.ImageField(upload_to='items/', blank=True)
    image3 = models.ImageField(upload_to='items/', blank=True)
    image4 = models.ImageField(upload_to='items/', blank=True)
    image5 = models.ImageField(upload_to='items/', blank=True)

    def __str__(self):
        return self.brand


'''-------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-----------------------------------------'''


class Category(models.Model):
    category1 = models.CharField(max_length=100, null=True)
    category2 = models.CharField(max_length=100, null=True)
    category3 = models.CharField(max_length=100, null=True)
    category4 = models.CharField(max_length=100, null=True)
    category5 = models.CharField(max_length=100, null=True)
    category6 = models.CharField(max_length=100, null=True)
    # prdt = models.ForeignKey(Product, blank = True, null = True, on_delete=models.CASCADE)
