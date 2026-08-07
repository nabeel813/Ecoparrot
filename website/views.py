from django.shortcuts import render
from products.models import Product
from .models import Client, ManufacturingCapability, ManufacturingPhoto

STRENGTHS = [
    '100% Automated Manufacturing Plant',
    'Production Capacity of 3 Lakh Bags Per Day',
    'Premium Imported Raw Materials',
    'High Bursting Strength & Durability',
    'Customized Branding Solutions',
    'Fast Delivery & Scalable Production',
    'Eco-Friendly Manufacturing Practices',
    'Customer-Centric Approach',
    'Competitive Pricing & Superior Quality',
]

WHY_CHOOSE = [
    {
        'title': 'Advanced Manufacturing Facility',
        'description': 'Our state-of-the-art automated manufacturing unit ensures precision, '
                        'consistency, and superior product quality.',
    },
    {
        'title': 'High Production Capacity',
        'description': 'With the capability to manufacture up to 300,000 bags per day, we '
                        'efficiently handle bulk orders while maintaining strict quality standards.',
    },
    {
        'title': 'Premium Quality Materials',
        'description': 'We use carefully selected high-quality imported papers and raw materials '
                        'to ensure durability and excellent finishing.',
    },
    {
        'title': 'Quality Assurance',
        'description': 'Our manufacturing process follows stringent quality control measures to '
                        'deliver products that meet industry standards and customer expectations.',
    },
    {
        'title': 'Eco-Friendly Commitment',
        'description': 'Every product is developed with sustainability at its core, helping '
                        'businesses adopt environmentally responsible packaging solutions.',
    },
    {
        'title': 'Local Manufacturing Advantage',
        'description': "As one of Kerala's pioneering fully automated bag manufacturing "
                        'facilities, we provide faster delivery, competitive pricing, and '
                        'reliable service to businesses across the region and beyond.',
    },
]

STATS = [
    {'value': 300000, 'suffix': '+', 'label': 'Bags Manufactured Daily'},
    {'value': 100, 'suffix': '%', 'label': 'Automated Production'},
    {'value': 30, 'suffix': '+', 'label': 'Trusted Clients'},
    {'value': 9, 'suffix': '', 'label': 'Advanced Machines'},
]
def home(request):
    from gallery.models import GalleryImage

    products = Product.objects.filter(is_featured=True).order_by("order")[:4]

    context = {
        "products": products,
        "images": GalleryImage.objects.exclude(image='').exclude(image__isnull=True)[:6],
        "clients": Client.objects.all(),
        "capabilities": ManufacturingCapability.objects.all(),
        "manufacturing_photos": ManufacturingPhoto.objects.exclude(image='').exclude(image__isnull=True)[:5],
        "strengths": STRENGTHS,
        "why_choose": WHY_CHOOSE,
        "stats": STATS,
    }

    return render(request, "website/home.html", context)




def about(request):
    context = {'why_choose': WHY_CHOOSE, 'stats': STATS, 'strengths': STRENGTHS}
    return render(request, 'website/about.html', context)


def manufacturing(request):
    context = {
        'capabilities': ManufacturingCapability.objects.all(),
        'manufacturing_photos': ManufacturingPhoto.objects.exclude(image='').exclude(image__isnull=True),
        'strengths': STRENGTHS,
        'stats': STATS,
    }
    return render(request, 'website/manufacturing.html', context)


def clients(request):
    return render(request, 'website/clients.html', {'clients': Client.objects.all()})
