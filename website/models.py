from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=120)
    logo = models.ImageField(upload_to='clients/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class ManufacturingCapability(models.Model):
    """
    A single manufacturing-capability highlight shown on the Manufacturing
    page/section, e.g. '100% Automated Manufacturing Facility'.
    Fully editable from the admin dashboard - no code changes required
    to add, edit, reorder, or remove a capability.
    """
    icon = models.CharField(
        max_length=10, blank=True,
        help_text="Optional emoji or short symbol shown next to the title, e.g. ⚙️"
    )
    title = models.CharField(
        max_length=150,
        help_text="e.g. '100% Automated Manufacturing Facility'"
    )
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']
        verbose_name = "Manufacturing Capability"
        verbose_name_plural = "Manufacturing Capabilities"

    def __str__(self):
        return self.title


class ManufacturingPhoto(models.Model):
    """
    A factory / machine / finished-product photo shown on the Manufacturing
    page. Uploaded and managed entirely through the admin dashboard -
    replaces the previously hardcoded demo image.
    """
    image = models.ImageField(upload_to='manufacturing/')
    caption = models.CharField(max_length=150, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']
        verbose_name = "Manufacturing Photo"
        verbose_name_plural = "Manufacturing Photos"

    def __str__(self):
        return self.caption or f"Manufacturing photo #{self.pk}"
