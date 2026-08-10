from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=120)
    logo = models.ImageField(upload_to='clients/', blank=True, null=True)
    industry = models.CharField(
        max_length=120, blank=True,
        help_text="e.g. 'Supermarket Chain', 'Fashion Retail', 'Hospitality'"
    )
    website = models.URLField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return self.name


class Testimonial(models.Model):
    """
    A customer testimonial / review, shown on the Home and Clients pages.
    Fully editable from the admin dashboard.
    """
    client = models.ForeignKey(
        Client, on_delete=models.SET_NULL, blank=True, null=True,
        related_name='testimonials',
        help_text="Optionally link this testimonial to a client logo."
    )
    author_name = models.CharField(max_length=120)
    author_role = models.CharField(
        max_length=150, blank=True,
        help_text="e.g. 'Purchase Manager, Lulu Hypermarket'"
    )
    author_photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    quote = models.TextField(help_text="The testimonial text.")
    rating = models.PositiveSmallIntegerField(
        default=5, help_text="Rating out of 5 stars."
    )
    is_featured = models.BooleanField(
        default=True, help_text="Show on the Home page highlight strip."
    )
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', '-id']

    def __str__(self):
        return f"{self.author_name} — {self.author_role or 'Customer'}"

    @property
    def star_range(self):
        return range(self.rating)


class TeamMember(models.Model):
    """
    A member of the leadership / management / production team, shown on
    the About page's Team section. Fully editable from the admin dashboard.
    """

    class Department(models.TextChoices):
        LEADERSHIP = 'leadership', 'Leadership'
        MANAGEMENT = 'management', 'Management'
        PRODUCTION = 'production', 'Production & Quality'
        SALES = 'sales', 'Sales & Client Relations'

    name = models.CharField(max_length=120)
    designation = models.CharField(
        max_length=150,
        help_text="e.g. 'Founder & Managing Director'"
    )
    department = models.CharField(
        max_length=20, choices=Department.choices, default=Department.MANAGEMENT
    )
    photo = models.ImageField(upload_to='team/', blank=True, null=True)
    bio = models.TextField(
        blank=True, help_text="Short 1-2 line bio, optional."
    )
    linkedin_url = models.URLField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.name} ({self.get_department_display()})"


class Milestone(models.Model):
    """
    A single entry in the company timeline shown on the About page,
    e.g. 'Jan 2023 — Ecoparrot PriPac incorporated'. Fully editable
    from the admin dashboard.
    """
    year = models.CharField(
        max_length=20, help_text="e.g. '2023' or 'Jan 2023'"
    )
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.year} — {self.title}"


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
