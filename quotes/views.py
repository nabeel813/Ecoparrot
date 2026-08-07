from django.shortcuts import render, redirect
from django.contrib import messages
from .models import QuoteRequest


def quote_view(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        phone = request.POST.get('phone', '').strip()
        company = request.POST.get('company', '').strip()
        product = request.POST.get('product', 'other')
        quantity = request.POST.get('quantity', '').strip()
        details = request.POST.get('details', '').strip()

        if name and email and phone:
            QuoteRequest.objects.create(
                name=name, email=email, phone=phone, company=company,
                product=product, quantity=quantity, details=details,
            )
            messages.success(request, "Quote request received! Our team will reach out within 24 hours.")
            return redirect('quotes:view')
        else:
            messages.error(request, 'Please fill in your name, email, and phone number.')

    return render(request, 'website/request-quote.html', {'product_choices': QuoteRequest.PRODUCT_CHOICES})
