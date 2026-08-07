from django.db import models


class GalleryImage(models.Model):
    CATEGORY_CHOICES = [
        ('facility', 'Manufacturing Facility'),
        ('product', 'Products'),
        ('event', 'Events & Delivery'),
    ]
    title = models.CharField(max_length=150)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='facility')
    image = models.ImageField(upload_to='gallery/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title
