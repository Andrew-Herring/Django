from rest_framework import serializers
from movies.models import Movie, Director

class DirectorSerializer(serializers.HyperlinkedModelSerializer):

  class Meta:
    model = Director
    # properties on director 'movies' is the related name on movies
    fields = ('name', 'is_arrogant_jerk', 'movies')

class MovieSerializer(serializers.HyperlinkedModelSerializer):
  # director = DirectorSerializer(read_only=True)

  class Meta:
    model = Movie
    fields = ('id', 'url', 'title', 'year', 'director')  