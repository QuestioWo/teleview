"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 3.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

import json
import os

from pathlib import Path
from datetime import timedelta

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

secrets_path = str(BASE_DIR) + '/../secrets.json'

if os.path.exists(secrets_path):
	f = json.load(open(secrets_path))
	SECRET_KEY = f['backendSecretKey']
else:
	SECRET_KEY = 'dev_key'

DEBUG = True

ALLOWED_HOSTS = [
	"nouvique.pythonanywhere.com",
	"localhost",
]

# Application definition

INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'rest_framework',
	'rest_framework_simplejwt',
	'corsheaders',
	'backend',
]

MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
	'corsheaders.middleware.CorsMiddleware',
]

REST_FRAMEWORK = {
	'DEFAULT_AUTHENTICATION_CLASSES': [
		'rest_framework_simplejwt.authentication.JWTAuthentication',
	],
}

SIMPLE_JWT = {
	'ACCESS_TOKEN_LIFETIME': timedelta(minutes=20),
	'REFRESH_TOKEN_LIFETIME': timedelta(weeks=1),
	'ROTATE_REFRESH_TOKENS': False,
	'BLACKLIST_AFTER_ROTATION': True,
	'UPDATE_LAST_LOGIN': False,

	'ALGORITHM': 'HS256',
	'SIGNING_KEY': SECRET_KEY,
	'VERIFYING_KEY': None,
	'AUDIENCE': None,
	'ISSUER': None,

	'AUTH_HEADER_TYPES': ('Bearer',),
	'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
	'USER_ID_FIELD': 'username',
	'USER_ID_CLAIM': 'user_username',
	'USER_AUTHENTICATION_RULE': 'rest_framework_simplejwt.authentication.default_user_authentication_rule',

	'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
	'TOKEN_TYPE_CLAIM': 'token_type',

	'JTI_CLAIM': 'jti',

	'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
	'SLIDING_TOKEN_LIFETIME': timedelta(minutes=5),
	'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=1),
}

CORS_ORIGIN_ALLOW_ALL = True

ROOT_URLCONF = 'backend.urls'

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

TEMPLATE_DIR = os.path.join(BASE_DIR, 'build')
STATIC_DIR = os.path.join(BASE_DIR, 'build')
STATICFILES_DIRS = [STATIC_DIR, ]
# MEDIA_DIR = os.path.join(BASE_DIR, 'media')
STATIC_URL = '/static/'
MEDIA_URL = '/media/'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': [TEMPLATE_DIR, ],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
			],
		},
	},
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': BASE_DIR / 'db.sqlite3',
	}
}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
		'OPTIONS': { 'min_length': 6, }
	},
]

PASSWORD_HASHERS = [
	'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
	'django.contrib.auth.hashers.BCryptPasswordHasher',
	'django.contrib.auth.hashers.PBKDF2PasswordHasher',
	'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'backend.User'