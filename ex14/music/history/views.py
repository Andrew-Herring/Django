from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

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