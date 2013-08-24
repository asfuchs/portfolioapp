
from django.contrib import admin
from game.models import Game

class GameAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,          {'fields': ['name', 'link', 'cover']}),
        ('Description', {'fields': ['date', 'description']}),
    ]

admin.site.register(Game, GameAdmin)
