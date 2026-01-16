from django.shortcuts import redirect, render
from app.models import*
from django.contrib import messages


def Home_Page(request):
    # Count Chapters, Membership, and Programs on the Home Page
    chapters_count = Chapter.objects.all().count() 
    membership_count = Membership_From.objects.all().count()
    programs_count = Programs.objects.all().count()
    
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Get the latest 3 News or Announcements from the database
    blogs = Post.objects.all().order_by('-created_at')[:3]
    # Get all Programs from the database to display on the Home Page
    programs_blogs = Programs.objects.all().order_by('-created_at')
    # Get all Presidents from the database ordered by year
    president = President.objects.all().order_by('year')
    
    # Context dictionary to pass data to the template
    context = {
        'chapters_count': chapters_count,
        'membership_count': membership_count,
        'programs_count': programs_count,
        
        'leaderships': leaderships,
        
        'blogs': blogs,
        'programs_blogs': programs_blogs, 
        'president': president, 
    }
    # Render the 'indext.html' template with the context data
    return render(request, 'pages/indext.html', context)

# Save the Subscribe Email
def SAVE_SUBSCRIBE_EMAIL(request):
    # Check if the request method is POST
    if request.method == "POST": 
        # Get Subscribe Email data from the HTML form
        email = request.POST.get('email')
        
        # Create a new Email object
        sub_email = Email(email=email)
        # Save the object to the database
        sub_email.save()
        
    # Redirect to the home page after saving
    return redirect('home')

# View all the Programs 
def PROGRAMS_LIST(request):
    # Get all the programs Data from the database
    programs_list = Programs.objects.all().order_by('-id')
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        'programs_list': programs_list,        
    }
    # Render the 'programs_list.html' template with the programs data
    return render(request, 'pages/programs_list.html', context)

def Programs_Detail(request, id):
    # Retrieve the specific program by ID
    program_detail = Programs.objects.get(id=id)
    # Get the latest 5 Programs from the database
    programs = Programs.objects.all().order_by('-created_at')[:5]
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        # Pass the program details
        'news_detail': program_detail,
        # Pass the latest programs
        'programs': programs,  
    }
    # Render the 'programs_details.html' template with the context data
    return render(request, 'pages/programs_details.html', context)

# View all the News and Update
def NEWS_UPDATE_LIST(request):  # Corrected the spelling of 'request'
    # Get all the news updates from the database
    news_update_list = Post.objects.all().order_by('-created_at') 
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        'news_update_list': news_update_list,        
    }
    # Render the 'news_update.html' template with the news updates
    return render(request, 'pages/news_update.html', context)

def News_Detail(request, id):
    # Retrieve the specific news post by ID
    news_detail = Post.objects.get(id=id)
    # Get the latest 5 News or Announcements from the database
    blogs = Post.objects.all().order_by('-created_at')[:5]
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        # Pass the news details
        'news_detail': news_detail,
        # Pass the latest blogs
        'blogs': blogs,
    }
    # Render the 'news_details.html' template with the context data
    return render(request, 'pages/news_details.html', context)

def ABOUT_US(request):
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        
    }
    # Render the 'about_us.html' template with the context data
    return render(request, 'pages/about_us.html', context)

def CONTACT_US(request):
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Check if the request method is POST
    if request.method == "POST": 
        # Get Full Name data from the HTML form
        contact_name = request.POST.get('name')
        # Get Message data from the HTML form
        contact_message = request.POST.get('message')
        # Get Subscribe Email data from the HTML form
        contact_email = request.POST.get('email')
        
        # Create a new Contact Messages object
        contact_messages = Contact_Form(
            contact_name = contact_name,
            contact_email = contact_email,
            contact_message = contact_message
            
            )
        # Save the object to the database
        contact_messages.save()
        # Showing Successful Messages
        messages.success(request, 'Thank you for Contacting us')
        # Redirect to the Contact Us page after saving
        return redirect('contact_us')          
    
    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        
    }
    # Render the 'about_us.html' template with the context data
    return render(request, 'pages/contact_us.html', context)

def Leadership(request, id):
    leadership = Leaderships.objects.get(id=id)
    chapters = Chapter.objects.all()
    leaderships = Leaderships.objects.all().order_by('-id')
    # Get all the Leadershiops from the databese
    leaderships = Leaderships.objects.all().order_by('-id')
    
    # Retrieve chapter chairmen associated with the specific leadership instance
    chapter_chairmen = Chapter_Chairman.objects.filter(leadership=leadership)

    
    # Context dictionary to pass data to the template
    context = {
        'leaderships': leaderships,
        'leaderships': leaderships,
        'chapters': chapters,
        'leadership': leadership,
        'chapter_chairmen': chapter_chairmen, 
    }
    return render(request, 'pages/leadership.html', context)

def Chapters(request, id):
    chapter = Chapter.objects.get(id=id)  # Get the specific chapter by ID
    chapters = Chapter.objects.all()  # Get all chapters

    # Filter chapters based on chapters_status
    liberian_chapters = chapters.filter(chapters_status=LIBERIAN_CHAPTERS)
    international_chapters = chapters.filter(chapters_status=INTERNATIONAL_CHAPTERS)


    leaderships = Leaderships.objects.all().order_by('-id')  # Get leaderships

    context = { 
        'leaderships': leaderships,
        'chapter': chapter,
        'liberian_chapters': liberian_chapters,
        'international_chapters': international_chapters,
    }
    return render(request, 'pages/chapters.html', context)

def Membership_Form(request):
    post = Post.objects.all().order_by('-created_at')[:4]
    program = Programs.objects.all().order_by('-created_at')[:12]
    View_chapters = Chapter.objects.all()
    leaderships = Leaderships.objects.all().order_by('-id')

    if request.method == "POST":
        profile_pic = request.FILES.get('profile_pic')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        gender = request.POST.get('gender')
        phone_number = request.POST.get('phone_number')
        email = request.POST.get('email')
        home_address = request.POST.get('home_address')
        birth_date = request.POST.get('birth_day')  # corrected field name
        nationality = request.POST.get('nationality')
        county_of_residence = request.POST.get('county_of_origin')  # corrected
        occupation = request.POST.get('occupation')
        extra_skill = request.POST.get('extra_skill')
        level_of_education = request.POST.get('level_of_education')

        chapter_id = request.POST.get('chapter_name')
        living_with = request.POST.get('living_with')  # corrected spelling
        working_or_not = request.POST.get('working_or_not')
        if_yes_place_of_work = request.POST.get('if_yes_place_of_work')
        hear_about_us = request.POST.get('hear_about_us')
        why_be_member = request.POST.get('why_be_member')

        emergency_first_name = request.POST.get('emergency_first_name')
        emergency_last_name = request.POST.get('emergency_last_name')
        emergency_email = request.POST.get('emergency_email')
        emergency_address = request.POST.get('emergency_address')
        emergency_relationship = request.POST.get('emergency_relationship')

        accepted_membership_rules = 'accepted_membership_rules' in request.POST
        accepted_privacy_policy = 'accepted_privacy_policy' in request.POST

        chapter_instance = Chapter.objects.get(id=chapter_id) if chapter_id else None

        save_membership = Membership_From(
            profile_pic=profile_pic,
            first_name=first_name,
            last_name=last_name,
            gender=gender, 
            phone_number=phone_number,
            email=email,
            home_address=home_address,
            birth_date=birth_date,
            nationality=nationality,
            county_of_residence=county_of_residence,
            occupation=occupation,
            extra_skill=extra_skill,
            level_of_education=level_of_education,
            chapter_name=chapter_instance,
            living_with=living_with,
            working_or_not=working_or_not,
            if_yes_place_of_work=if_yes_place_of_work,
            hear_about_us=hear_about_us,
            why_be_member=why_be_member,
            emergency_first_name=emergency_first_name,
            emergency_last_name=emergency_last_name,
            emergency_email=emergency_email,
            emergency_address=emergency_address,
            emergency_relationship=emergency_relationship,
            accepted_membership_rules=accepted_membership_rules,
            accepted_privacy_policy=accepted_privacy_policy,
        )
        save_membership.save()
        return redirect('chack_out')

    context = {
        'post': post,
        'program': program,
        'View_chapters': View_chapters,
        'leaderships': leaderships,
    }
    return render(request, 'pages/membership_form.html', context)

def Chack_Out(request):
    

    context = { 
        
    }
    return render(request, 'pages/chack_out.html', context)

