from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('manufacturing/', views.manufacturing, name='manufacturing'),
    path('clients/', views.clients, name='clients'),
]
