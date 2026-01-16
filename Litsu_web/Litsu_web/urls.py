from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .import view

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # ======== Home Page ========
    path('', view.Home_Page, name='home'),
    
    # ======== About Us ======== 
    # Route for viewing about us Page
    path('about_us', view.ABOUT_US, name='about_us'),
    
    # ======== Contact Us ======== 
    # Route for viewing Contact us Page
    path('contact_us', view.CONTACT_US, name='contact_us'),
    
    
    path('membership form', view.Membership_Form, name='membership_form'),
    
    path('membership form chack_out page', view.Chack_Out, name='chack_out'),
    
    # ======== Leadership ======== 
    # Route for viewing Leadership Page
    path('leadership/<str:id>', view.Leadership, name='leadership'),
    
    # ======== LITSU Chapters ======== 
    # Route for viewing Chapter Page
    path('chapters/<str:id>', view.Chapters, name='chapters'),
    
    # ======== Subscription emails ======== 
    # Route for saving subscription emails
    path('subscribe_email/save', view.SAVE_SUBSCRIBE_EMAIL, name='subscribe_email'), 
    
    # ======== Programs ======== 
    # Route for displaying the list of programs
    path('programs/list', view.PROGRAMS_LIST, name='programs_list'), 
    # Route for viewing details of a specific program by ID
    path('programs/detail <str:id>', view.Programs_Detail, name='programs_detail'), 
    
    # ======== News and Update List ======== 
    # Route for displaying the list of news and updates
    path('news/list', view.NEWS_UPDATE_LIST, name='news_list'), 
    # Route for viewing details of a specific news article by ID
    path('news/ <str:id>', view.News_Detail, name='news_detalte'), 
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)