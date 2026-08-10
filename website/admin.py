from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Client, ManufacturingCapability, ManufacturingPhoto,
    Testimonial, TeamMember, Milestone,
)


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'industry', 'order')
    list_editable = ('order',)
    search_fields = ('name', 'industry')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author_name', 'author_role', 'rating', 'is_featured', 'order')
    list_editable = ('is_featured', 'order')
    search_fields = ('author_name', 'author_role', 'quote')
    list_filter = ('is_featured', 'rating')


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'designation', 'department', 'photo_preview', 'order')
    list_editable = ('order',)
    list_filter = ('department',)
    search_fields = ('name', 'designation')

    def photo_preview(self, obj):
        if obj.photo:
            return format_html(
                '<img src="{}" style="height:40px;width:40px;border-radius:50%;object-fit:cover;" />',
                obj.photo.url,
            )
        return "-"
    photo_preview.short_description = "Photo"


@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ('year', 'title', 'order')
    list_editable = ('order',)
    ordering = ('order',)


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
