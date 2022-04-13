from rest_framework import routers
from .api import TodoViewSet, UserViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register('todos', TodoViewSet, 'todos')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
