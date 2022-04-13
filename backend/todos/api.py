from todos.models import Todo
from todos.serializers import TodoSerializer, UserSerializer
from rest_framework import viewsets, permissions
from django.contrib.auth.models import User

class TodoViewSet(viewsets.ModelViewSet):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer
	permission_classes = [permissions.IsAuthenticated]
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
