from .models import Chapter
from .models import Leaderships  # if you want leaderships globally too
from .models import LIBERIAN_CHAPTERS, INTERNATIONAL_CHAPTERS

def chapters_context(request):
    chapters = Chapter.objects.all()
    liberian_chapters = chapters.filter(chapters_status=LIBERIAN_CHAPTERS)
    international_chapters = chapters.filter(chapters_status=INTERNATIONAL_CHAPTERS)

    return {
        "liberian_chapters": liberian_chapters,
        "international_chapters": international_chapters,
    }
