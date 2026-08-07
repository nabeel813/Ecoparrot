from django.db import models


class QuoteRequest(models.Model):
    PRODUCT_CHOICES = [
        ('customized-paper-bags', 'Customized Paper Bags'),
        ('customized-non-woven-bags', 'Customized Non-Woven Bags'),
        ('paper-carry-bags', 'Paper Carry Bags'),
        ('laminated-non-woven-bags', 'Laminated Non-Woven Bags'),
        ('other', 'Other / Not Sure'),
    ]
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('closed', 'Closed'),
    ]

    name = models.CharField(max_length=120)
    company = models.CharField(max_length=150, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    product = models.CharField(max_length=40, choices=PRODUCT_CHOICES, default='other')
    quantity = models.CharField(max_length=100, blank=True)
    details = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} - {self.get_product_display()}'
