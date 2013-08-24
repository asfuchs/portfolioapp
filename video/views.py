
from django.http import HttpResponse
from video.models import Project
from django.http import Http404
from django.shortcuts import render
from django.template import RequestContext, loader

def index(request):
    latest_video_list = Project.objects.order_by('date')[:5]
    template = loader.get_template('video/index.html')
    context = RequestContext(request, {
        'latest_video_list': latest_video_list,
    })
    return HttpResponse(template.render(context))

def detail(request, video_id):
    try:
        project = Project.objects.get(pk=video_id)
    except Project.DoesNotExist:
        raise Http404
    return render(request, 'video/detail.html', {'project': project})