from django.contrib import admin
from django.utils.html import format_html
from .models import Client, ManufacturingCapability, ManufacturingPhoto


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')
    list_editable = ('order',)


@admin.register(ManufacturingCapability)
class ManufacturingCapabilityAdmin(admin.ModelAdmin):
    list_display = ('title', 'icon', 'order')
    list_editable = ('icon', 'order')
    ordering = ('order',)


@admin.register(ManufacturingPhoto)
class ManufacturingPhotoAdmin(admin.ModelAdmin):
    list_display = ('caption', 'image_preview', 'order')
    list_editable = ('order',)
    ordering = ('order',)

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height:60px;border-radius:6px;" />', obj.image.url)
        return "-"
    image_preview.short_description = "Preview"
