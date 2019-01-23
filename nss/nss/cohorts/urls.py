from django.urls import path
from . import views


app_name = 'cohorts'
urlpatterns = [
  # ex: /cohorts/
  path('', views.index, name='index'),
  # ex: /cohorts/5/
  path('<int:cohort_id>/', views.detail, name='detail')
]