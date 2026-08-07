from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Product
# Static fallback content (used until real products are added via the admin).



def product_list(request):
    products = Product.objects.filter(is_featured=True)

    return render(
        request,
        "website/products.html",
        {
            "products": products
        }
    )


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)

    return render(
        request,
        "website/product-detail.html",
        {
            "product": product
        }
    )
