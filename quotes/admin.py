from django.contrib import admin
from .models import QuoteRequest


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'phone', 'product', 'quantity', 'status', 'created_at')
    list_filter = ('status', 'product', 'created_at')
    list_editable = ('status',)
    search_fields = ('name', 'company', 'email', 'phone')
