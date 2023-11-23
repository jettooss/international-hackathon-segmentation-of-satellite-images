from .base import *

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

AUTH_PASSWORD_VALIDATORS = [
]

DEBUG = True

STATIC_ROOT = os.path.join(BASE_DIR, 'static', f'v{STATIC_VERSION}')

STATIC_URL = f'/static/v{STATIC_VERSION}/'

MEDIA_URL = 'media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')
