import os
 os.environ.setdefault('DJANGO_SETTINGS_MODULE',
 'tango_with_django_project.settings')

 import django
 django.setup()
 from rango.models import User, Item, ItemType, Order

 def populate():
 
 user = [
   User.objects.create_user(
username=req['smartashu'].lower(),
   email=req['smartashu@domain.com'].lower(),
password=req['09876'],
first_name=req['smart'].title(),
last_name=req['ashu'].title(),
location_town=req['ronda'].title(),
location_country=req['Spain'].title(),
location_postcode=req['90687'].upper(),
stripe_account_id=accountResponse.id
)  
    accountResponse = stripe.Account.create(
type="standard",
default_currency='GBP',
country=pycountry.countries.get(name=req['spain'].title()).alpha_2,
email=req['smartashu@domain.com'].lower(), )
  
   User.objects.create_user(
username=req['bullseye'].lower(),
   email=req['bullseye@domain.com'].lower(),
password=req['09845'],
first_name=req['bulls'].title(),
last_name=req['eye'].title(),
location_town=req['Hvar'].title(),
location_country=req['Croatia'].title(),
location_postcode=req['5683'].upper(),
stripe_account_id=accountResponse.id
)  
    accountResponse = stripe.Account.create(
type="standard",
default_currency='GBP',
country=pycountry.countries.get(name=req['Croatia'].title()).alpha_2,
email=req['bullseye@domain.com'].lower(), )
   
   User.objects.create_user(
username=req['masterfive'].lower(),
   email=req['masterfive@domain.com'].lower(),
password=req['09809'],
first_name=req['master'].title(),
last_name=req['five'].title(),
location_town=req['ribe'].title(),
location_country=req['Denmark'].title(),
location_postcode=req['90438'].upper(),
stripe_account_id=accountResponse.id
)  
    accountResponse = stripe.Account.create(
type="standard",
default_currency='GBP',
country=pycountry.countries.get(name=req['Denmark'].title()).alpha_2,
email=req['masterfive@domain.com'].lower(), )
   
   User.objects.create_user(
username=req['gorgeousv'].lower(),
   email=req['gorgeousv@domain.com'].lower(),
password=req['09889'],
first_name=req['gorgeous'].title(),
last_name=req['vee'].title(),
location_town=req['rye'].title(),
location_country=req['England'].title(),
location_postcode=req['90612'].upper(),
stripe_account_id=accountResponse.id
)  
    accountResponse = stripe.Account.create(
type="standard",
default_currency='GBP',
country=pycountry.countries.get(name=req['England'].title()).alpha_2,
email=req['gorgeousv@domain.com'].lower(), )

 Item = [
  {'name':'handbag',
  'seller':'                      ',
  'bio': 'Its a lovely bag with different patterns including the favourite hazy pattern.',
  'upload_date': '                  ',
  'is_featured': False,
  'shape': 'Rectangle',
  'colour':'blue',
  'tag 0':'01A',
  'tag 1':'02B',
  'tag 2':'03C',
  'tag 3':'04D',
  'tag 4':'05E'},
   {'name':'monitor',
  'seller':'                      ',
  'bio': 'Its a big screen monitor with many keys.',
  'upload_date': '                  ',
  'is_featured': False,
  'shape': 'square',
  'colour':'grey',
  'tag 0':'06F',
  'tag 1':'07G',
  'tag 2':'08H',
  'tag 3':'09I',
  'tag 4':'10J'},
   {'name':'chair',
  'seller':'                      ',
  'bio': 'Its a chair with light cushions. It can be folded.',
  'upload_date': '                  ',
  'is_featured': False,
  'shape': 'triangle',
  'colour':'pink',
  'tag 0':'11K',
  'tag 1':'12L',
  'tag 2':'13M',
  'tag 3':'14N',
  'tag 4':'15O'},
   {'name':'Printer',
  'seller':'                      ',
  'bio': 'Its a printer with many different print patterns.',
  'upload_date': '                  ',
  'is_featured': False,
  'shape': 'oval',
  'colour':'black',
  'tag 0':'16P',
  'tag 1':'17Q',
  'tag 2':'18R',
  'tag 3':'19S',
  'tag 4':'20T'},
   {'name':'Speakers',
  'seller':'                      ',
  'bio': 'Its a speaker with different sound variations.',
  'upload_date': '                  ',
  'is_featured': False,
  'shape': 'crescent',
  'colour':'white',
  'tag 0':'21U',
  'tag 1':'22V',
  'tag 2':'23W',
  'tag 3':'24X',
  'tag 4':'25Y'}]

 ItemType = [
 {'item':'    ',
 'quantity':'9',
 'size':'20',
 'price':'32.50',
 'available': True},
  {'item':'    ',
 'quantity':'7',
 'size':'22',
 'price':'26.40',
 'available': True},
  {'item':'    ',
 'quantity':'3',
 'size':'19',
 'price':'12',
 'available': True},
  {'item':'    ',
 'quantity':'5',
 'size':'11',
 'price':'12.39',
 'available': True},
  {'item':'    ',
 'quantity':'2',
 'size':'18',
 'price':'4.49',
 'available': True}]

 order = [
   {'buyer': '       ',
    'item': '       ',
    'item_type': '      ',
    'quantity': '3',
    'total':'5',
    'purchase_date':'    ',
    'payment_successful': True,
    'shipped': False,
    'arrived': Flase,
    'shipping_tag':'99A',
    'stripe_client_secret': '123Z',
    'stripe_payment_intent_id': '001Q'},
   {'buyer': '       ',
    'item': '       ',
    'item_type': '      ',
    'quantity': '5',
    'total':'14',
    'purchase_date':'    ',
    'payment_successful': True,
    'shipped': False,
    'arrived': Flase,
    'shipping_tag':'98B',
    'stripe_client_secret': '345X',
    'stripe_payment_intent_id': '002W'},
   {'buyer': '       ',
    'item': '       ',
    'item_type': '      ',
    'quantity': '9',
    'total':'18',
    'purchase_date':'    ',
    'payment_successful': True,
    'shipped': False,
    'arrived': Flase,
    'shipping_tag':'97C',
    'stripe_client_secret': '567J',
    'stripe_payment_intent_id': '003E'},
   {'buyer': '       ',
    'item': '       ',
    'item_type': '      ',
    'quantity': '12',
    'total':'17',
    'purchase_date':'    ',
    'payment_successful': True,
    'shipped': False,
    'arrived': Flase,
    'shipping_tag':'96D',
    'stripe_client_secret': '789K',
    'stripe_payment_intent_id': '004R'},
   {'buyer': '       ',
    'item': '       ',
    'item_type': '      ',
    'quantity': '2',
    'total':'13',
    'purchase_date':'    ',
    'payment_successful': True,
    'shipped': False,
    'arrived': Flase,
    'shipping_tag':'95P',
    'stripe_client_secret': '910H',
    'stripe_payment_intent_id': '005V'},
   
 # The execution actually starts here
if __name__ == '__main__':
print('Starting Rango population script...')
populate()
