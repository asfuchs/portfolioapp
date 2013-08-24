
from django.http import HttpResponse
from game.models import Game
from django.http import Http404
from django.shortcuts import render
from django.template import RequestContext, loader

def index(request):
    latest_game_list = Game.objects.order_by('date')[:5]
    template = loader.get_template('game/index.html')
    context = RequestContext(request, {
        'latest_game_list': latest_game_list,
    })
    return HttpResponse(template.render(context))

def detail(request, game_id):
    try:
        project = Game.objects.get(pk=game_id)
    except Game.DoesNotExist:
        raise Http404
    return render(request, 'game/detail.html', {'project': project})