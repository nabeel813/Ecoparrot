from django.shortcuts import render
from .models import GalleryImage


def gallery_list(request):
    # Only show entries that actually have a photo uploaded via the admin -
    # placeholder rows with no image are skipped instead of showing a blank card.
    images = GalleryImage.objects.exclude(image='').exclude(image__isnull=True)
    return render(request, 'website/gallery.html', {'images': images})
