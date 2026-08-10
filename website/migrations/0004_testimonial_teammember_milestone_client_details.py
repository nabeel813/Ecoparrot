from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0003_seed_manufacturing_capabilities'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='industry',
            field=models.CharField(blank=True, max_length=120,
                                    help_text="e.g. 'Supermarket Chain', 'Fashion Retail', 'Hospitality'"),
        ),
        migrations.AddField(
            model_name='client',
            name='website',
            field=models.URLField(blank=True),
        ),
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('designation', models.CharField(help_text="e.g. 'Founder & Managing Director'", max_length=150)),
                ('department', models.CharField(choices=[('leadership', 'Leadership'), ('management', 'Management'), ('production', 'Production & Quality'), ('sales', 'Sales & Client Relations')], default='management', max_length=20)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='team/')),
                ('bio', models.TextField(blank=True, help_text='Short 1-2 line bio, optional.')),
                ('linkedin_url', models.URLField(blank=True)),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'ordering': ['order', 'id'],
            },
        ),
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(max_length=120)),
                ('author_role', models.CharField(blank=True, help_text="e.g. 'Purchase Manager, Lulu Hypermarket'", max_length=150)),
                ('author_photo', models.ImageField(blank=True, null=True, upload_to='testimonials/')),
                ('quote', models.TextField(help_text='The testimonial text.')),
                ('rating', models.PositiveSmallIntegerField(default=5, help_text='Rating out of 5 stars.')),
                ('is_featured', models.BooleanField(default=True, help_text='Show on the Home page highlight strip.')),
                ('order', models.PositiveIntegerField(default=0)),
                ('client', models.ForeignKey(blank=True, help_text='Optionally link this testimonial to a client logo.', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='testimonials', to='website.client')),
            ],
            options={
                'ordering': ['order', '-id'],
            },
        ),
        migrations.CreateModel(
            name='Milestone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(help_text="e.g. '2023' or 'Jan 2023'", max_length=20)),
                ('title', models.CharField(max_length=150)),
                ('description', models.TextField(blank=True)),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'ordering': ['order', 'id'],
            },
        ),
    ]
