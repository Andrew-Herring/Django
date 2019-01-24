from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import Artist, Song

from .models import Artist
from .models import Song


def index(request):
    artist_list = Artist.objects.all()
    context = { "artist_list": artist_list }
    return render(request, 'history/index.html', context)


def detail(request, id):
    song_list = Song.objects.filter(artist_id = id)
    artist = Artist.objects.get(pk=id)
    context = { "song_list": song_list, "artist": artist }
    return render(request, "history/detail.html", context)


def newArtist(request):

  artist = Artist(artist_name = request.POST['artist'])
  artist.save()
  added_artist = Artist.objects.filter(artist_name = request.POST['artist'])
  return HttpResponseRedirect(reverse('history:detail', args=(added_artist[0].id,)))
