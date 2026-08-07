from django.shortcuts import render, redirect
from django.contrib import messages
from .models import ContactMessage


def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        subject = request.POST.get('subject', '').strip()
        message_text = request.POST.get('message', '').strip()

        if name and email and message_text:
            ContactMessage.objects.create(
                name=name, email=email, phone=phone,
                subject=subject, message=message_text,
            )
            messages.success(request, "Thanks! Your message has been received — we'll get back to you shortly.")
            return redirect('contact:view')
        else:
            messages.error(request, 'Please fill in your name, email, and message.')

    return render(request, 'website/contact.html')
