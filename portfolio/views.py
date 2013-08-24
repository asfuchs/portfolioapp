from django.http import HttpResponse
from photologue.models import Gallery
from video.models import Project
from game.models import Game
from django.http import Http404
from django.shortcuts import render
from django.template import RequestContext, loader

def home(request):
    video = Project.objects.get(pk=1)
    game = Game.objects.get(pk=1)
    gallery = Gallery.objects.get(pk=1)
    template = loader.get_template('home.html')

    context = RequestContext(request, {
        'video': video,
        'game': game,
        'gallery': gallery,
    })
    return HttpResponse(template.render(context))