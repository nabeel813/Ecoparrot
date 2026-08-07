# Generated for ManufacturingCapability & ManufacturingPhoto models

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ManufacturingCapability',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon', models.CharField(blank=True, help_text='Optional emoji or short symbol shown next to the title, e.g. ⚙️', max_length=10)),
                ('title', models.CharField(help_text="e.g. '100% Automated Manufacturing Facility'", max_length=150)),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Manufacturing Capability',
                'verbose_name_plural': 'Manufacturing Capabilities',
                'ordering': ['order', 'id'],
            },
        ),
        migrations.CreateModel(
            name='ManufacturingPhoto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='manufacturing/')),
                ('caption', models.CharField(blank=True, max_length=150)),
                ('order', models.PositiveIntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Manufacturing Photo',
                'verbose_name_plural': 'Manufacturing Photos',
                'ordering': ['order', 'id'],
            },
        ),
    ]
