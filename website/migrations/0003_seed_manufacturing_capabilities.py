from django.db import migrations

CAPABILITIES = [
    ("🏭", "100% Automated Manufacturing Facility", 1),
    ("📦", "Production Capacity: 3,00,000 Bags per Day", 2),
    ("🖨️", "High-Speed Printing & Finishing", 3),
    ("🌍", "Premium Imported Raw Materials", 4),
    ("✅", "Strict Quality Control", 5),
    ("🌱", "Eco-Friendly Production Process", 6),
]


def seed_capabilities(apps, schema_editor):
    ManufacturingCapability = apps.get_model('website', 'ManufacturingCapability')
    if ManufacturingCapability.objects.exists():
        return
    for icon, title, order in CAPABILITIES:
        ManufacturingCapability.objects.create(icon=icon, title=title, order=order)


def remove_capabilities(apps, schema_editor):
    ManufacturingCapability = apps.get_model('website', 'ManufacturingCapability')
    ManufacturingCapability.objects.filter(title__in=[c[1] for c in CAPABILITIES]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_manufacturingcapability_manufacturingphoto'),
    ]

    operations = [
        migrations.RunPython(seed_capabilities, remove_capabilities),
    ]
