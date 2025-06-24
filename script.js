    AOS.init();

    
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('from-left')) {
            entry.target.classList.add('animate-left');
          } else if (entry.target.classList.contains('from-right')) {
            entry.target.classList.add('animate-right');
          }
        }
      });
    });

    // Observe both achievements and value proposition content
    document.querySelectorAll('.from-left, .from-right').forEach((el) => {
      observer.observe(el);
    });
  });

    //FAQ's
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
    // Trigger animations when elements enter viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    });

    document.querySelectorAll('.fade-up, .zoom-in, .fade-slide').forEach(el => observer.observe(el));


// About PAGE

cards.forEach((card, index) => {
  card.classList.add(index % 2 === 0 ? 'from-left' : 'from-right');
  card.dataset.animation = index % 2 === 0 ? 'animate-left' : 'animate-right';
  observer.observe(card);
});

threshold: 0.3 // triggers earlier
