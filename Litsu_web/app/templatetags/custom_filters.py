from django import template
import re

register = template.Library()

@register.filter
def double_breaks_every_two_paragraphs(value):
    if not value:
        return ""

    # Split into paragraphs by double line breaks
    paragraphs = re.split(r'(?:\r?\n){2,}', value.strip())

    formatted = ""
    for i, para in enumerate(paragraphs, start=1):
        formatted += f"<p>{para.strip()}</p>"
        if i % 2 == 0:  # after every 2 paragraphs
            formatted += "<br><br>"  

    return formatted