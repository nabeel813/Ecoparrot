#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate
python manage.py createsuperuser --noinput || true
python manage.py shell -c "from django.contrib.auth.models import User; u,created = User.objects.get_or_create(username='admin', defaults={'email':'nblnbl224@gmail.com'}); u.set_password('nabeel123'); u.is_superuser=True; u.is_staff=True; u.save()"