from django.db import migrations

ITEMS = [
    ("Automated Production Line", "facility", 1),
    ("Paper Bag Making Machine", "facility", 2),
    ("Finished Paper Bags", "product", 3),
    ("Non-Woven Bag Range", "product", 4),
    ("Quality Check", "facility", 5),
    ("Bulk Order Dispatch", "event", 6),
    ("Flexo Printing in Progress", "facility", 7),
    ("Client Branded Bags", "product", 8),
]


def seed_gallery(apps, schema_editor):
    GalleryImage = apps.get_model('gallery', 'GalleryImage')
    if GalleryImage.objects.exists():
        return
    for title, category, order in ITEMS:
        # image is left blank on purpose - upload the real photo via the
        # admin dashboard (Gallery > Gallery images) to replace the
        # placeholder shown on the site.
        GalleryImage.objects.create(title=title, category=category, order=order)


def remove_gallery(apps, schema_editor):
    GalleryImage = apps.get_model('gallery', 'GalleryImage')
    GalleryImage.objects.filter(title__in=[i[0] for i in ITEMS]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_gallery, remove_gallery),
    ]
