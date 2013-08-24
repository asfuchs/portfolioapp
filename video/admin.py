
from django.contrib import admin
from video.models import Project

class VideoAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,          {'fields': ['name', 'url', 'cover']}),
        ('Description', {'fields': ['date', 'description']}),
    ]

admin.site.register(Project, VideoAdmin)
