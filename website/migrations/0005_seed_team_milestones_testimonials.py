from django.db import migrations

# NOTE: These are placeholder entries so the new About/Team/Testimonials
# sections aren't empty on first deploy. Replace them with real names,
# designations, photos, and quotes from /admin/ — nothing here is final.

TEAM = [
    ("Founder & Managing Director", "Founder & Managing Director", "leadership",
     "Leads Ecoparrot's vision to make Kerala self-sufficient in eco-friendly packaging.", 1),
    ("Production Head", "Head of Manufacturing", "production",
     "Oversees the automated production floor and day-to-day output quality.", 2),
    ("Quality Control Lead", "Quality Assurance Manager", "production",
     "Ensures every batch meets bursting-strength and finish standards.", 3),
    ("Sales & Client Relations", "Business Development Manager", "sales",
     "Point of contact for bulk orders, custom branding, and account support.", 4),
]

MILESTONES = [
    ("2023", "Ecoparrot PriPac Incorporated", "Registered in Ernakulam, Kerala, with a vision to bring fully automated eco-friendly bag manufacturing to the state.", 1),
    ("2023", "Automated Manufacturing Facility Commissioned", "Set up Kerala's first fully automated paper and non-woven bag production line.", 2),
    ("2024", "Production Scaled Up", "Expanded capacity to serve larger retail chains and bulk institutional orders.", 3),
    ("2025", "30+ Trusted Clients Onboarded", "Grew our customer base across retail, hospitality, and corporate sectors.", 4),
]

TESTIMONIALS = [
    ("Retail Partner", "Purchase Manager, Supermarket Chain",
     "Ecoparrot has been a reliable partner for our custom-branded paper bags — consistent quality and always on time.", 5, 1),
    ("Boutique Owner", "Owner, Fashion Boutique",
     "The finishing and print quality on our branded bags exceeded what we were getting from out-of-state suppliers.", 5, 2),
    ("Café Chain Manager", "Operations Manager, Café Chain",
     "Switching to Ecoparrot's eco-friendly bags helped us meet our sustainability goals without any compromise on durability.", 5, 3),
]


def seed(apps, schema_editor):
    TeamMember = apps.get_model('website', 'TeamMember')
    Milestone = apps.get_model('website', 'Milestone')
    Testimonial = apps.get_model('website', 'Testimonial')

    if not TeamMember.objects.exists():
        for name, designation, department, bio, order in TEAM:
            TeamMember.objects.create(
                name=name, designation=designation, department=department,
                bio=bio, order=order,
            )

    if not Milestone.objects.exists():
        for year, title, description, order in MILESTONES:
            Milestone.objects.create(year=year, title=title, description=description, order=order)

    if not Testimonial.objects.exists():
        for author_name, author_role, quote, rating, order in TESTIMONIALS:
            Testimonial.objects.create(
                author_name=author_name, author_role=author_role,
                quote=quote, rating=rating, order=order, is_featured=True,
            )


def unseed(apps, schema_editor):
    TeamMember = apps.get_model('website', 'TeamMember')
    Milestone = apps.get_model('website', 'Milestone')
    Testimonial = apps.get_model('website', 'Testimonial')
    TeamMember.objects.filter(name__in=[t[0] for t in TEAM]).delete()
    Milestone.objects.filter(title__in=[m[1] for m in MILESTONES]).delete()
    Testimonial.objects.filter(author_name__in=[t[0] for t in TESTIMONIALS]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0004_testimonial_teammember_milestone_client_details'),
    ]

    operations = [
        migrations.RunPython(seed, unseed),
    ]
