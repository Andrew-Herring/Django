from django.urls import path

from . import views

app_name = "history"
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id>/', views.detail, name='detail'),
    path('newArtist', views.newArtist, name='newArtist')
]