from django.urls import path

from . import views

urlpatterns = [
    # ex: /history/
    path('', views.index, name='index'),
    # ex: /history/5/
    path('<int:id>/', views.detail, name='detail'),
]