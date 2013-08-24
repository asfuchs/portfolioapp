
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length = 50)
    url = models.CharField(max_length =  200)
    cover = models.CharField(max_length =  200)
    date = models.DateField('date created')
    description = models.CharField(max_length = 5000)
    def __unicode__(self):
        return self.name